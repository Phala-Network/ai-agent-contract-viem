import main from './index'
import 'dotenv/config'

async function execute(inputObj: any) {
    const inputJson = JSON.stringify(inputObj)
    console.log('INPUT:', inputJson)
    return await main(inputJson)
}

const sampleInput = {
    "untrustedData": {
        "fid": 2,
        "url": "https://fcpolls.com/polls/1",
        "messageHash": "0xd2b1ddc6c88e865a33cb1a565e0058d757042974",
        "timestamp": 1706243218,
        "network": 1,
        "buttonIndex": 2,
        "castId": {
            "fid": 226,
            "hash": "0xa48dd46161d8e57725f5e26e34ec19c13ff7f3b9"
        }
    },
    "trustedData": {
        "messageBytes": "d2b1ddc6c88e865a33cb1a565e0058d757042974..."
    }
}

async function test() {
    const signData = {
        method: 'GET',
        path: '/ipfs/QmVHbLYhhYA5z6yKpQr4JWr3D54EhbSsh7e7BFAAyrkkMf',
        queries: {
            data: ["Hello MOON!"],
            type: ["sign"],
        },
        secret: { secretSalt: process.env.SECRET_SALT },
        headers: {},
    }
    const verifyData = {
        method: 'GET',
        path: '/ipfs/QmVHbLYhhYA5z6yKpQr4JWr3D54EhbSsh7e7BFAAyrkkMf',
        queries: {
            data: ["Hello MOON!"],
            signature: ["REPLACE_WITH_SIGNATURE"],
            type: ["verify"],
        },
        secret: { secretSalt: process.env.SECRET_SALT },
        headers: {},
    }

    const testArgsString = JSON.stringify({
        method: 'GET',
        path: '/ipfs/QmVHbLYhhYA5z6yKpQr4JWr3D54EhbSsh7e7BFAAyrkkMf',
        queries: {
        },
        secret: { secretSalt: process.env.SECRET_SALT },
        headers: {},
    })
    console.log(`\nTo test in the SideVM playground go to https://phat.phala.network/contracts/view/0xf0a398600f02ea9b47a86c59aed61387e450e2a99cb8b921cd1d46f734e45409\n\nConnect you polkadot.js account and select 'run_js' with the parameters:\n- engine: SidevmQuickJSWithPolyfill\n- js_code: Source code text of dist/index.ts\n- args: ${testArgsString}`);
    console.log('Watch video here for to see the visual steps of testing in Sidevm playground: https://www.youtube.com/watch?v=fNqNeLfFFME');
    console.log(`\nMake sure to replace queries and secret with your values compatible with your AI Agent Contract.`);
    console.log(`\nNOTE:\nSigning data must be tested in Sidevm Playground. Use this as the arg value to test\n- args: ${JSON.stringify(signData)}`)
    console.log(`\nNOTE:\nVerifying data must be tested in Sidevm Playground. Use this as the arg value to test\n- args: ${JSON.stringify(verifyData)}`)
}

test().then(() => { }).catch(err => console.error(err)).finally(() => process.exit())
