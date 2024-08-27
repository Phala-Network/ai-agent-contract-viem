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
Create `.env` file
```shell
cp .env.example .env
```

In `.env` file replace `SECRET_SALT` with your own secret salt
```text
SECRET_SALT="SECRET_SALT"
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
Currently, WapoJS does not have a playground to test against. 
Please test by:
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
✔ Files stored at the following IPFS URI: ipfs://QmPQJD5zv3cYDRM25uGAVjLvXGNyQf9Vonz7rqkQB52Jae
✔ Open this link to view your upload: https://b805a9b72767504353244e0422c2b5f9.ipfscdn.io/ipfs/bafybeiapzlkjemyza3up3x3bkgb7zvyh4mjfnqqz635rsnxu3zmj5x425m/

Agent Contract deployed at: https://wapo-testnet.phala.network/ipfs/QmPQJD5zv3cYDRM25uGAVjLvXGNyQf9Vonz7rqkQB52Jae

If your agent requires secrets, ensure to do the following:
1) Edit the setSecrets.ts file to add your secrets
2) Set the variable AGENT_CID=QmPQJD5zv3cYDRM25uGAVjLvXGNyQf9Vonz7rqkQB52Jae in the .env file
3) Run command: npm run set-secrets
```

<details>
<summary>New to thirdweb?</summary>
We use <a href="https://thirdweb.com/dashboard/infrastructure/storage">thirdweb Storage</a> to host IPFS contents. If you are new to thirdweb, the command will guide you to create your account or login to your existing account from the browser. (You may need to forward port 8976 if you are accessing a remote console via SSH.)
</details>

<details>
<summary>Did thirdweb fail to publish?</summary>
If ThirdWeb fails to publish, please use any IPFS pinning service to publish your Agent Contract.
</details>

### Access the Published AI Agent

Once published, your AI Agent is available at the URL: `https://wapo-testnet.phala.network/ipfs/<your-cid>`. You can get it from the "Publish to IPFS" step.

You can test it with `curl`.

```bash
curl https://wapo-testnet.phala.network/ipfs/<your-cid>
```

### Add Secrets

By default, all the compiled JS code is visible for anyone to view if they look at IPFS CID. This makes private info like API keys, signer keys, etc. vulnerable to be stolen. To protect devs from leaking keys, we have added a field called `secret` in the `Request` object. It allows you to store secrets in a vault for your AI Agent to access.

To add your secrets, 
1) Edit the [setSecrets.ts](./scripts/setSecrets.ts) file and update the `secrets` variable at the top of the file.
```json
{"secretSalt": "<SECRET_SALT>"}
```
2) Update the [.env](./.env.example) file with your published agent IPFS CID
```text
AGENT_CID=Qmc7EDq1X8rfYGGfHyXZ6xsmcSUWQcqsDoeRMfmvFujih3
```
3) Run command to set the secrets
```shell
npm run set-secrets
```
Expected output:
```shell
Storing secrets...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   157    0    68  100    89    100    130 --:--:-- --:--:-- --:--:--   230
{"token":"363b6860c818fc03","key":"b092532592cbd0cf","succeed":true}

Secrets set successfully. Go to the URL below to interact with your agent:
https://wapo-testnet.phala.network/ipfs/QmPQJD5zv3cYDRM25uGAVjLvXGNyQf9Vonz7rqkQB52Jae?key=b092532592cbd0cf
```

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
- [Derived ECDSA Key](https://wapo-testnet.phala.network/ipfs/QmYNXZ7tGijMHvweRjcx5vGPjmMBCfqnaBS7AHQDipymqh?key=22c89875324bd834)
- [Sign 'signedByTEE'](https://wapo-testnet.phala.network/ipfs/QmYNXZ7tGijMHvweRjcx5vGPjmMBCfqnaBS7AHQDipymqh?key=22c89875324bd834&type=sign&data=signedByTEE)
- [Verify Signature](https://wapo-testnet.phala.network/ipfs/QmYNXZ7tGijMHvweRjcx5vGPjmMBCfqnaBS7AHQDipymqh?key=22c89875324bd834&type=verify&data=signedByTEE&signature=0xa2330010f1eb66c58819390a052709653055f5e4f4daf94ecf2b3eb0312d373c25a4429ac3926bdd2faa2837b809d429bf185a5af9f4166fb93fe151f4ac242c1b)

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
