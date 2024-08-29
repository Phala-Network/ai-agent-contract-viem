import 'dotenv/config'
import './testSupport'
import {execute} from "./testSupport";

async function test() {
    const signData = await execute({
        method: 'GET',
        path: '/ipfs/CID',
        queries: {
            data: ["Hello MOON!"],
            type: ["sign"],
        },
        secret: { secretSalt: 'SECRET_SALT' },
        headers: {},
    })
    const result = JSON.parse(signData);
    console.log(result.body)
    const resultBody = JSON.parse(result.body)

    const verifyData = await execute({
        method: 'GET',
        path: '/ipfs/CID',
        queries: {
            data: ["Hello MOON!"],
            signature: [resultBody.signature],
            type: ["verify"],
        },
        secret: { secretSalt: 'SECRET_SALT' },
        headers: {},
    })
    console.log(JSON.parse(verifyData))

    console.log(`Currently, WapoJS does not have a playground to test against. \nPlease test by:\n- Execute: 'npm run publish-agent'\n- Set secrets: 'npm run set-secrets'\n- Go to the url produced by setting the secrets (e.g. https://wapo-testnet.phala.network/ipfs/QmPQJD5zv3cYDRM25uGAVjLvXGNyQf9Vonz7rqkQB52Jae?key=b092532592cbd0cf)`)
}

test().then(() => { }).catch(err => console.error(err)).finally(() => process.exit())
