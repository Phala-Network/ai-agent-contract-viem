import '@phala/wapo-env'
import { Hono } from 'hono/tiny'
import { handle } from '@phala/wapo-env/guest'
import { privateKeyToAccount } from 'viem/accounts'
import {
    keccak256,
    http,
    type Address,
    createPublicClient,
    PrivateKeyAccount,
    verifyMessage,
    createWalletClient,
    parseGwei
} from 'viem'
import { baseSepolia } from 'viem/chains'
import superjson from 'superjson'

export const app = new Hono()

const publicClient = createPublicClient({
    chain: baseSepolia,
    transport: http(),
})
const walletClient = createWalletClient({
    chain: baseSepolia,
    transport: http(),
})

function getECDSAAccount(salt: string): PrivateKeyAccount {
    const derivedKey = Wapo.deriveSecret(salt)
    const keccakPrivateKey = keccak256(derivedKey)
    return privateKeyToAccount(keccakPrivateKey)
}

async function signData(account: PrivateKeyAccount, data: string): Promise<any> {
    let result = {
        derivedPublicKey: account.address,
        data: data,
        signature: ''
    }
    const publicKey = account.address
    console.log(`Signing data [${data}] with Account [${publicKey}]`)
    const signature = await account.signMessage({
        message: data,
    })
    console.log(`Signature: ${signature}`)
    result.signature = signature
    return result
}

async function verifyData(account: PrivateKeyAccount, data: string, signature: any): Promise<any> {
    let result = {
        derivedPublicKey: account.address,
        data: data,
        signature: signature,
        valid: false
    }
    const publicKey = account.address
    console.log("Verifying Signature with PublicKey ", publicKey)
    const valid = await verifyMessage({
        address: publicKey,
        message: data,
        signature,
    })
    console.log("Is signature valid? ", valid)
    result.valid = valid
    return result
}

async function sendTransaction(account: PrivateKeyAccount, to: Address, gweiAmount: string): Promise<any> {
    let result = {
        derivedPublicKey: account.address,
        to: to,
        gweiAmount: gweiAmount,
        hash: '',
        receipt: {}
    }
    console.log(`Sending Transaction with Account ${account.address} to ${to} for ${gweiAmount} gwei`)
    // @ts-ignore
    const hash = await walletClient.sendTransaction({
        account,
        to,
        value: parseGwei(`${gweiAmount}`),
    })
    console.log(`Transaction Hash: ${hash}`)
    const receipt = await publicClient.waitForTransactionReceipt({ hash })
    console.log(`Transaction Status: ${receipt.status}`)
    result.hash = hash
    result.receipt = receipt
    return result
}

app.get('/', async (c) => {
    let vault: Record<string, string> = {}
    let queries = c.req.queries() || {}
    let result = {};
    try {
        vault = JSON.parse(process.env.secret || '')
    } catch (e) {
        console.error(e)
        return c.json({ error: "Failed to parse secrets" })
    }
    const secretSalt = (vault.secretSalt) ? vault.secretSalt as string : 'SALTY_BAE'
    const getType = (queries.type) ? queries.type[0] as string : ''
    const account = getECDSAAccount(secretSalt)
    const data = (queries.data) ? queries.data[0] as string : ''
    console.log(`Type: ${getType}, Data: ${data}`)
    try {
        if (getType == 'sendTx') {
            result = (queries.to && queries.gweiAmount) ?
              await sendTransaction(account, queries.to[0] as Address, queries.gweiAmount[0]) :
              { message: 'Missing query [to] or [gweiAmount] in URL'}
        } else if (getType == 'sign') {
            result = (data) ? await signData(account, data) : { message: 'Missing query [data] in URL'}
        } else if (getType == 'verify') {
            if (data && queries.signature) {
                result = await verifyData(account, data, queries.signature[0] as string)
            } else {
                result = { message: 'Missing query [data] or [signature] in URL'}
            }
        } else {
            result = { derivedPublicKey: account.address }
        }
    } catch (error) {
        console.error('Error:', error)
        result = { message: error }
    }
    const { json, meta } = superjson.serialize(result)
    return c.json(json)
})

app.post('/', async (c) => {
    const data = await c.req.json()
    console.log('user payload in JSON:', data)
    return c.json(data)
});

export default handle(app)
