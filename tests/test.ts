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
    console.log(result)
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

    console.log(`Send some ETH to ${resultBody.derivedPublicKey} if TX fails...`)
    const sendTx = await execute({
        method: 'GET',
        path: '/ipfs/CID',
        queries: {
            to: ["0xC5227Cb20493b97bb02fADb20360fe28F52E2eff"],
            gweiAmount: ["420"],
            type: ["sendTx"],
        },
        secret: { secretSalt: 'SECRET_SALT' },
        headers: {},
    })
    console.log(JSON.parse(sendTx))

    console.log(`Now you are ready to publish your agent, add secrets, and interact with your agent in the following steps:\n- Execute: 'npm run publish-agent'\n- Set secrets: 'npm run set-secrets'\n- Go to the url produced by setting the secrets (e.g. https://wapo-testnet.phala.network/ipfs/QmPQJD5zv3cYDRM25uGAVjLvXGNyQf9Vonz7rqkQB52Jae?key=b092532592cbd0cf)`)
}

test().then(() => { }).catch(err => console.error(err)).finally(() => process.exit())
