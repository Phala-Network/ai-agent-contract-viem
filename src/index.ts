import { Request, Response, route } from './httpSupport'
import '@phala/wapo-env'
import { privateKeyToAccount } from 'viem/accounts'
import { keccak256, PrivateKeyAccount, verifyMessage } from 'viem'

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

async function GET(req: Request): Promise<Response> {
    const secrets = req.secret || {}
    const queries = req.queries
    const secretSalt = (secrets.secretSalt) ? secrets.secretSalt as string : 'SALTY_BAE'
    const getType = (queries.type) ? queries.type[0] as string : ''
    const account = getECDSAAccount(secretSalt)
    let data = (queries.data) ? queries.data[0] as string : ''
    let result = {};
    try {
        if (getType == 'sign') {
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

    return new Response(JSON.stringify(result));
}

async function POST(req: Request): Promise<Response> {
    return new Response(JSON.stringify({message: 'Not Implemented'}));
}

export default async function main(request: string) {
    return await route({ GET, POST }, request)
}
