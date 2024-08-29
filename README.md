<div align="center">
  <a href="https://github.com/Phala-Network/ai-agent-contract-tools">
    <h1>AI Agent Contract Template Tools</h1>
    <img height="320" src="./public/AI-Agent-Contract.jpg" />
    <br />
  </a>
  <p align="center">
    Host your AI Agent Contract on Phala's decentralized serverless cloud.
    <br />
    <a href="https://github.com/Phala-Network/ai-agent-contract-tools"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://wapo-testnet.phala.network/ipfs/QmPQJD5zv3cYDRM25uGAVjLvXGNyQf9Vonz7rqkQB52Jae?key=b092532592cbd0cf&type=verify&data=signedByTEE&signature=0x27a9cd3e1aa3b238c8bdbc57d831f503b9af11ba2cc4875780c21ea8a14b471c098d11791709f6243001908bfe217644c6b3882a16903048e9e01e946b318c0d1b">View Demo</a>
    ·
    <a href="https://github.com/Phala-Network/ai-agent-contract-tools/issues">Report Bug</a>
    ·
    <a href="https://discord.gg/phala-network">Discord</a>
  </p>

  <h3>Architecure Overview</h3>
  <img height="320" src="./public/ai-agent-architecture.jpg" />
</div>

## 🤖 What Is This?!

<div align="center">
  <img height="240" src="https://www.jlwranglerforums.com/forum/attachments/zoolander-gif.325299/">
</div>

The AI Agent Contract Tools template is a **MINIMAL** template to build an AI Agent that can be hosted on Phala Network's decentralized hosting protocol. Unlike Vercel or other FaaS, it allows you to publish your AI Agent compiled code to IPFS and hosts it on a fully decentralized FaaS cloud with the following benefits:

- 💨 Ship Fast: Build and ship with familiar toolchain in minutes
- ⛑️ Secure: Execution guarded by rock solid TEE / Intel SGX
- 🔒 Private: Host API keys and user privacy at ease
- 💎 Unstoppable: Powered by IPFS and Phala's 35k+ decentralized TEE workers

[//]: # (<img width="320" src="https://media1.tenor.com/m/NBtFH5F9QTgAAAAd/what-is-my-purpose-butter.gif" />)

## Getting Started
### Prepare
Install dependencies
```shell
npm install
```

### Testing Locally
Create `.env` file with the default ThirdWeb API key for publishing your Agent Contract to IPFS
```shell
cp .env.example .env
```

Build your Agent
```shell
npm run build
```

Test your Agent locally
```shell
npm run test
```

Expected Test Results
```shell
INPUT: {"method":"GET","path":"/ipfs/CID","queries":{"data":["Hello MOON!"],"type":["sign"]},"secret":{"secretSalt":"SECRET_SALT"},"headers":{}}
Signing data [Hello MOON!] with Account [0x3F003c3501eeD0A8Ab1B023a644EdCD2a8096EaD]
Signature: 0xb34ff00b803c0cfead2b4f32afab4f73a9169cf24b8236307462a49ff08fc25674303b3e0cea3b80e8eece16c42563fe7d5c7f4ab09857fc4d6a1b99a7c97d2e1b
{
  status: 200,
  body: '{"derivedPublicKey":"0x3F003c3501eeD0A8Ab1B023a644EdCD2a8096EaD","data":"Hello MOON!","signature":"0xb34ff00b803c0cfead2b4f32afab4f73a9169cf24b8236307462a49ff08fc25674303b3e0cea3b80e8eece16c42563fe7d5c7f4ab09857fc4d6a1b99a7c97d2e1b"}',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}
INPUT: {"method":"GET","path":"/ipfs/CID","queries":{"data":["Hello MOON!"],"signature":["0xb34ff00b803c0cfead2b4f32afab4f73a9169cf24b8236307462a49ff08fc25674303b3e0cea3b80e8eece16c42563fe7d5c7f4ab09857fc4d6a1b99a7c97d2e1b"],"type":["verify"]},"secret":{"secretSalt":"SECRET_SALT"},"headers":{}}
Verifying Signature with PublicKey  0x3F003c3501eeD0A8Ab1B023a644EdCD2a8096EaD
Is signature valid?  true
{
  status: 200,
  body: '{"derivedPublicKey":"0x3F003c3501eeD0A8Ab1B023a644EdCD2a8096EaD","data":"Hello MOON!","signature":"0xb34ff00b803c0cfead2b4f32afab4f73a9169cf24b8236307462a49ff08fc25674303b3e0cea3b80e8eece16c42563fe7d5c7f4ab09857fc4d6a1b99a7c97d2e1b","valid":true}',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}
INPUT: {"method":"GET","path":"/ipfs/CID","queries":{"to":["0xC5227Cb20493b97bb02fADb20360fe28F52E2eff"],"gweiAmount":["420"],"type":["sendTx"]},"secret":{"secretSalt":"SECRET_SALT"},"headers":{}}
Sending Transaction with Account 0x3F003c3501eeD0A8Ab1B023a644EdCD2a8096EaD to 0xC5227Cb20493b97bb02fADb20360fe28F52E2eff for 420 gwei
Transaction Hash: 0x6a7218d19bb2529df074dd5e2ad30e3c2400a2e2d730ca554f067af29ecfff42
Transaction Status: success
{
  status: 200,
  body: '{"derivedPublicKey":"0x3F003c3501eeD0A8Ab1B023a644EdCD2a8096EaD","to":"0xC5227Cb20493b97bb02fADb20360fe28F52E2eff","gweiAmount":"420","hash":"0x6a7218d19bb2529df074dd5e2ad30e3c2400a2e2d730ca554f067af29ecfff42","receipt":{"blockHash":"0x83688869e27fb83743c7b072ef5f45a3efe3657a2878ca605f6fce8cf3b06c38","blockNumber":"14592136","contractAddress":null,"cumulativeGasUsed":"931909","effectiveGasPrice":"1000983","from":"0x3f003c3501eed0a8ab1b023a644edcd2a8096ead","gasUsed":"21000","l1BaseFeeScalar":"0x44d","l1BlobBaseFee":"0x48540a4664","l1BlobBaseFeeScalar":"0xa118b","l1Fee":"20531405242323","l1GasPrice":"18898712795","l1GasUsed":"1600","logs":[],"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","status":"success","to":"0xc5227cb20493b97bb02fadb20360fe28f52e2eff","transactionHash":"0x6a7218d19bb2529df074dd5e2ad30e3c2400a2e2d730ca554f067af29ecfff42","transactionIndex":4,"type":"eip1559","l1FeeScalar":null}}',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}

Now you are ready to publish your agent, add secrets, and interact with your agent in the following steps:
- Execute: 'npm run publish-agent'
- Set secrets: 'npm run set-secrets'
- Go to the url produced by setting the secrets (e.g. https://wapo-testnet.phala.network/ipfs/QmPQJD5zv3cYDRM25uGAVjLvXGNyQf9Vonz7rqkQB52Jae?key=b092532592cbd0cf)
```

### Publish Your AI Agent

Upload your compiled AI Agent code to IPFS.
```shell
npm run publish-agent
```

Upon a successful upload, the command should show the URL to access your AI Agent.
```shell
✓ Compiled successfully.
  67.83 KB  dist/index.js
Running command: npx thirdweb upload dist/index.js
This may require you to log into thirdweb and will take some time to publish to IPFS...

    $$\     $$\       $$\                 $$\                         $$\       
    $$ |    $$ |      \__|                $$ |                        $$ |      
  $$$$$$\   $$$$$$$\  $$\  $$$$$$\   $$$$$$$ |$$\  $$\  $$\  $$$$$$\  $$$$$$$\  
  \_$$  _|  $$  __$$\ $$ |$$  __$$\ $$  __$$ |$$ | $$ | $$ |$$  __$$\ $$  __$$\ 
    $$ |    $$ |  $$ |$$ |$$ |  \__|$$ /  $$ |$$ | $$ | $$ |$$$$$$$$ |$$ |  $$ |
    $$ |$$\ $$ |  $$ |$$ |$$ |      $$ |  $$ |$$ | $$ | $$ |$$   ____|$$ |  $$ |
    \$$$$  |$$ |  $$ |$$ |$$ |      \$$$$$$$ |\$$$$$\$$$$  |\$$$$$$$\ $$$$$$$  |
     \____/ \__|  \__|\__|\__|       \_______| \_____\____/  \_______|\_______/ 

 💎 thirdweb v0.14.12 💎

- Uploading file to IPFS. This may take a while depending on file sizes.

✔ Successfully uploaded file to IPFS.
✔ Files stored at the following IPFS URI: ipfs://QmVJ3xknfRevUkc68iZc4RdPSLL2gLD8WagwMQCdGMyC4g
✔ Open this link to view your upload: https://b805a9b72767504353244e0422c2b5f9.ipfscdn.io/ipfs/bafybeidhk5nzutxyx3xusgjl4v6nkvscdoiowzofc7hqnf3l4xipieshie/

Agent Contract deployed at: https://wapo-testnet.phala.network/ipfs/QmVJ3xknfRevUkc68iZc4RdPSLL2gLD8WagwMQCdGMyC4g

If your agent requires secrets, ensure to do the following:
1) Edit the ./secrets/default.json file or create a new JSON file in the ./secrets folder and add your secrets to it.
2) Run command: 'npm run set-secrets' or 'npm run set-secrets [path-to-json-file]'
Deployment information updated in ./logs/latestDeployment.json
```

> :information_source: Note that your latest deployment information will be logged to in file [`./logs/latestDeployment.json`](./logs/latestDeployment.json). This file is updated every time you publish a new Agent Contract to IPFS. This file is also used to get the IPFS CID of your Agent Contract when setting secrets for your Agent Contract.
> 
> Here is an example:
> ```json
> {
>   "date": "2024-08-29T03:55:04.278Z",
>   "cid": "Qmb2Mn72sY9h8ew6Ld5bW13Fknzge3hssRetJTUWyyoma7",
>   "url": "https://wapo-testnet.phala.network/ipfs/Qmb2Mn72sY9h8ew6Ld5bW13Fknzge3hssRetJTUWyyoma7"
> }
> ```

<details>
<summary>New to Thirdweb?</summary>
We use <a href="https://thirdweb.com/dashboard/infrastructure/storage">thirdweb Storage</a> to host IPFS contents. If you are new to thirdweb, the command will guide you to create your account or login to your existing account from the browser.
</details>

> **Did Thirdweb fail to publish?**
> 
> If ThirdWeb fails to publish, please signup for your own ThirdWeb account to publish your Agent Contract to IPFS. Signup or login at https://thirdweb.com/dashboard/ 
> 
> Whenever you log into ThirdWeb, create a new API key and replace the default API Key with yours in the [.env](./.env) file.
>
> ```
> THIRDWEB_API_KEY="YOUR_THIRDWEB_API_KEY"
> ```


### Access the Published AI Agent

Once published, your AI Agent is available at the URL: `https://wapo-testnet.phala.network/ipfs/<your-cid>`. You can get it from the "Publish to IPFS" step.

You can test it with `curl`.

```bash
curl https://wapo-testnet.phala.network/ipfs/<your-cid>
```

### Add Secrets

By default, all the compiled JS code is visible for anyone to view if they look at IPFS CID. This makes private info like API keys, signer keys, etc. vulnerable to be stolen. To protect devs from leaking keys, we have added a field called `secret` in the `Request` object. It allows you to store secrets in a vault for your AI Agent to access.

To add your secrets, 
1) Edit the [default.json](./secrets/default.json) file or create a new JSON file in the `./secrets` folder and add your secrets to it.
```json
{
  "secretSalt": "SALTY_BAE"
}
```
2) Run command to set the secrets
```shell
npm run set-secrets
# or if you have a custom JSON file
npm run set-secrets <path-to-json-file>
```
Expected output:
```shell
Use default secrets...
Storing secrets...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   161    0    68  100    93    130    178 --:--:-- --:--:-- --:--:--   309
{"token":"1e7c8d07c412ff89","key":"6978ea391960e272","succeed":true}

Secrets set successfully. Go to the URL below to interact with your agent:
https://wapo-testnet.phala.network/ipfs/QmVJ3xknfRevUkc68iZc4RdPSLL2gLD8WagwMQCdGMyC4g?key=6978ea391960e272
Log entry added to secrets.log
```

> :information_source: Note that all your secrets will be logged in file [`./logs/secrets.log`](./logs/secrets.log). This file is updated every time you add new secrets to your Agent Contract. If you have not published an Agent Contract, yet, this command will fail since there is not a CID to map the secrets to.
>
> Here is an example:
> ```text
> 2024-08-28T19:31:07.011Z, CID: [QmYNXZ7tGijMHvweRjcx5vGPjmMBCfqnaBS7AHQDipymqh], Token: [fc908693f43dbe2f], Key: [18ba50e9c1d5822a], URL: [https://wapo-testnet.phala.network/ipfs/QmYNXZ7tGijMHvweRjcx5vGPjmMBCfqnaBS7AHQDipymqh?key=18ba50e9c1d5822a]
> 2024-08-29T03:22:11.453Z, CID: [QmYNXZ7tGijMHvweRjcx5vGPjmMBCfqnaBS7AHQDipymqh], Token: [d0e96601ea38b6be], Key: [2b5fd724a4de3652], URL: [https://wapo-testnet.phala.network/ipfs/QmYNXZ7tGijMHvweRjcx5vGPjmMBCfqnaBS7AHQDipymqh?key=2b5fd724a4de3652]
> 2024-08-29T03:37:10.033Z, CID: [QmYNXZ7tGijMHvweRjcx5vGPjmMBCfqnaBS7AHQDipymqh], Token: [ec667a69d0df6653], Key: [63d145b3bddf56b4], URL: [https://wapo-testnet.phala.network/ipfs/QmYNXZ7tGijMHvweRjcx5vGPjmMBCfqnaBS7AHQDipymqh?key=63d145b3bddf56b4]
> 2024-08-29T03:53:54.735Z, CID: [QmYNXZ7tGijMHvweRjcx5vGPjmMBCfqnaBS7AHQDipymqh], Token: [b9b53656b1e0293b], Key: [31db5184579e3427], URL: [https://wapo-testnet.phala.network/ipfs/QmYNXZ7tGijMHvweRjcx5vGPjmMBCfqnaBS7AHQDipymqh?key=31db5184579e3427]
> 2024-08-29T03:55:14.959Z, CID: [Qmb2Mn72sY9h8ew6Ld5bW13Fknzge3hssRetJTUWyyoma7], Token: [beb2e71cd4c7997d], Key: [e189f4deee88dcc1], URL: [https://wapo-testnet.phala.network/ipfs/Qmb2Mn72sY9h8ew6Ld5bW13Fknzge3hssRetJTUWyyoma7?key=e189f4deee88dcc1]
> ```

The API returns a `token` and a `key`. The `key` is the id of your secret. It can be used to specify which secret you are going to pass to your frame. The `token` can be used by the developer to access the raw secret. You should never leak the `token`.

<details>
<summary>To verify the secret</summary>
Run the following command where `key` and `token` are replaced with the values from adding your `secret` to the vault.

```shell
curl https://wapo-testnet.phala.network/vaults/<key>/<token>
```

Expected output:
```shell
{"data":{"secretSalt":"<SECRET_SALT>"},"succeed":true}
```

If you are using secrets, make sure that your URL is set in the following syntax where `cid` is the IPFS CID of your compiled JS file and `key` is the `key` from adding secrets to your vault.
```text
https://wapo-testnet.phala.network/ipfs/<cid>?key=<key>
```

</details>

#### Example:
- [Derived ECDSA Key](https://wapo-testnet.phala.network/ipfs/QmVJ3xknfRevUkc68iZc4RdPSLL2gLD8WagwMQCdGMyC4g?key=6978ea391960e272)
- [Sign 'signedByTEE'](https://wapo-testnet.phala.network/ipfs/QmVJ3xknfRevUkc68iZc4RdPSLL2gLD8WagwMQCdGMyC4g?key=6978ea391960e272&type=sign&data=signedByTEE)
- [Verify Signature](https://wapo-testnet.phala.network/ipfs/QmVJ3xknfRevUkc68iZc4RdPSLL2gLD8WagwMQCdGMyC4g?key=6978ea391960e272&type=verify&data=signedByTEE&signature=0xa2330010f1eb66c58819390a052709653055f5e4f4daf94ecf2b3eb0312d373c25a4429ac3926bdd2faa2837b809d429bf185a5af9f4166fb93fe151f4ac242c1b)
- [Send TX on Base Sepolia](https://wapo-testnet.phala.network/ipfs/QmVJ3xknfRevUkc68iZc4RdPSLL2gLD8WagwMQCdGMyC4g?key=6978ea391960e272&type=sendTx&to=0xC5227Cb20493b97bb02fADb20360fe28F52E2eff&gweiAmount=420)

### Access Queries
To help create custom logic, we have an array variable named `queries` that can be accessed in the `Request` class. To access the `queries` array variable `type` value at index `0`, the syntax will look as follows:
```typescript
const type = req.queries.type[0] as string;
```

## FAQ

<details>
<summary><b>What packages can I use in the AI Agent server?</b></summary>
<ul>
  <li>Most of the npm packages are supported: viem, onchainkit, ….</li>
  <li>Some packages with some advanced features are not supported:</li>
  <ul>
    <li>Memory usage over 100MB</li>
    <li>Web Assembly</li>
    <li>Browser only features: local storage, service workers, etc</li>
  </ul>
</ul>
</details>

<details>
<summary><b>What’s the spec of the Javascript runtime?</b></summary>
<ul>
  <li>The code runs inside a tailored <a href="https://bellard.org/quickjs/">QuickJS engine</a></li>
  <li>Available features: ES2023, async, fetch, setTimeout, setInterval, bigint</li>
  <li> <a href="https://docs.phala.network/tech-specs/ai-agent-contract#wapojs/">Tech spec doc</a></li>
</ul>
</details>

<details>
<summary><b>Why is the serverless platform secure?</b></summary>
<ul>
  <li>Your AI Agent code on is fully secure, private, and permissionless. Nobody can manipulate your program, steal any data from it, or censor it.</li>
  <li>Security: The code is executed in the decentralized TEE network running on Phala Network. It runs code inside a secure blackbox (called enclave) created by the CPU. It generates cryptographic proofs verifiable on Phala blockchain. It proves that the hosted code is exactly the one you deployed.</li>
  <li>Privacy: You can safely put secrets like API keys or user privacy on Phala Network. The code runs inside TEE hardware blackboxs. The memory of the program is fully encrypted by the TEE. It blocks any unauthorized access to your data.</li>
  <li>Learn more at <a href="https://phala.network">Phala Network Homepage</a></li>
</details>

<details>
<summary><b>What's TEE / Intel SGX?</b></summary>
<ul>
  <li><a href="https://collective.flashbots.net/t/tee-sgx-wiki/2019">TEE/SGX wiki</a></li>
  <li><a href="https://collective.flashbots.net/t/debunking-tee-fud-a-brief-defense-of-the-use-of-tees-in-crypto/2931">Debunking TEE FUD: A Brief Defense of The Use of TEEs in Crypto</a></li>
</details>
