import main from './index'
import 'dotenv/config'

async function execute(inputObj: any) {
    const inputJson = JSON.stringify(inputObj)
    console.log('INPUT:', inputJson)
    return await main(inputJson)
}

async function test() {
    const signData = {
        method: 'GET',
        path: '/ipfs/CID',
        queries: {
            data: ["Hello MOON!"],
            type: ["sign"],
        },
        secret: { secretSalt: process.env.SECRET_SALT },
        headers: {},
    }
    const verifyData = {
        method: 'GET',
        path: '/ipfs/CID',
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
        path: '/ipfs/CID',
        queries: {
        },
        secret: { secretSalt: process.env.SECRET_SALT },
        headers: {},
    })
    console.log(`Currently, WapoJS does not have a playground to test against. \nPlease test by:\n- Execute: 'npm run publish-agent'\n- Set secrets: 'npm run set-secrets'\n- Go to the url produced by setting the secrets (e.g. https://wapo-testnet.phala.network/ipfs/QmPQJD5zv3cYDRM25uGAVjLvXGNyQf9Vonz7rqkQB52Jae?key=b092532592cbd0cf)`)
}

test().then(() => { }).catch(err => console.error(err)).finally(() => process.exit())
