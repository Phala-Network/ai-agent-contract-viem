import { Request, Response, route } from './httpSupport'
import { renderHtml } from './uiSupport'
import '@phala/sidevm-env'
import { privateKeyToAccount } from 'viem/accounts'
import { keccak256, PrivateKeyAccount, verifyMessage } from 'viem'

function getECDSAAccount(salt: string): PrivateKeyAccount {
    const derivedKey = pink.deriveSecret(salt);
    const keccakPrivateKey = keccak256(derivedKey);
    return privateKeyToAccount(keccakPrivateKey);
}

async function signData(account: PrivateKeyAccount, data: string): Promise<string> {
    const publicKey = account.address;
    console.log(`Signing data [${data}] with Account [${publicKey}]`);
    const signature = await account.signMessage({
        message: data,
    });
    console.log(`Signature: ${signature}`);
    return `\nSigner Public Key: [${publicKey}]\nData Signed: [${data}]\nSignature: [${signature}]`;
}

async function verifyData(account: PrivateKeyAccount, data: string, signature: any): Promise<string> {
    const publicKey = account.address;
    console.log("Verifying Signature with PublicKey ", publicKey);
    const valid = await verifyMessage({
        address: publicKey,
        message: data,
        signature,
    });
    console.log("Is signature valid? ", valid);
    return `\nSigner Public Key: [${publicKey}]\nData to Verify: [${data}]\nSignature: [${signature}]\nIs Valid? ${valid}`
}

async function GET(req: Request): Promise<Response> {
    const secret = req.queries?.key ?? '';
    const secretSalt = req.secret?.secretSalt as string;
    const getType = (req.queries.type) ? req.queries.type[0] as string : '';
    const account = getECDSAAccount(secretSalt);
    let data = (req.queries.data) ? req.queries.data[0] as string : '';
    let result = '';
    try {
        if (getType == 'sign') {
            result = await signData(account, data)
        } else if (getType == 'verify') {
            result = await verifyData(account, data, req.queries.signature[0] as string);
        } else {
            result = `Your derived ECDSA Public Key: [${account.address}]`
        }
    } catch (error) {
        console.error('Error:', error);
        result = error;
    }

    return new Response(renderHtml(result));
}

async function POST(req: Request): Promise<Response> {
    return new Response('Not Implemented')
}

export default async function main(request: string) {
    return await route({ GET, POST }, request)
}
