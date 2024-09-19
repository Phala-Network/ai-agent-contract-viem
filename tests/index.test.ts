import { afterAll, describe, expect, test, vi } from 'vitest'
import { app } from '../src/'

// Set Testing env secrets
const secretSalt = JSON.stringify({secretSalt: 'SALTY_BAE'})
vi.stubEnv('secret', secretSalt)

describe('Test Viem SDK AI Agent Contract', () => {
  test('Derive Account', async () => {
    const resp = await app.request(
      '/',
      {},
      {
        secret: {secretSalt: 'SALTY_BAE'}
      }
    )
    console.log(resp)
    expect(resp.status).toBe(200)
    expect(resp.headers.get('content-type')?.toLowerCase()).toBe('application/json; charset=utf-8')
    const data = await resp.json()
    console.log(data)
    expect(data).toHaveProperty('derivedPublicKey')
  })

  test('Sign Message Data', async () => {
    const resp = await app.request(
      '/?type=sign&data=Hello%20MOON!',
      {},
      {
        secret: {secretSalt: 'SALTY_BAE'}
      }
    )
    expect(resp.status).toBe(200)
    expect(resp.headers.get('content-type')?.toLowerCase()).toBe('application/json; charset=utf-8')
    const data = await resp.json()
    console.log(data)
    expect(data).toHaveProperty('derivedPublicKey')
    expect(data).toHaveProperty('data')
    expect(data).toHaveProperty('signature')
  })

  test('Verify Signature', async () => {
    const resp = await app.request(
      '/?type=verify&data=Hello%20MOON!&signature=0xc7f2004cccd174bdba3f7641761ac2ffe9bf17ddd89a877ae151b9714e618cfd66f23bac562b6f63f2c929f07f81dda71c50310d4fce216810d549d7635d15451b',
      {},
      {
        secret: {secretSalt: 'SALTY_BAE'}
      }
    )
    expect(resp.status).toBe(200)
    expect(resp.headers.get('content-type')?.toLowerCase()).toBe('application/json; charset=utf-8')
    const data = await resp.json()
    console.log(data)
    expect(data).toHaveProperty('derivedPublicKey')
    expect(data).toHaveProperty('data')
    expect(data).toHaveProperty('signature')
    expect(data).toHaveProperty('valid')
  })

  test('Send TX on Base Sepolia', async () => {
    const resp = await app.request(
      '/?type=sendTx&to=0xC5227Cb20493b97bb02fADb20360fe28F52E2eff&gweiAmount=420',
        {},
    )
    expect(resp.status).toBe(200)
    expect(resp.headers.get('content-type')?.toLowerCase()).toBe('application/json; charset=utf-8')
    const data = await resp.json()
    console.log(data)
    expect(data).toHaveProperty('derivedPublicKey')
    expect(data).toHaveProperty('to')
    expect(data).toHaveProperty('gweiAmount')
    expect(data).toHaveProperty('hash')
    expect(data).toHaveProperty('receipt')
  })

  test('POST /', async () => {
    const input = {foo: 'bar'}
    const resp = await app.request('/', {
      method: 'POST',
      body: JSON.stringify(input),
    })
    expect(resp.status).toBe(200)
    expect(resp.headers.get('content-type')?.toLowerCase()).toBe('application/json; charset=utf-8')
    const data = await resp.json()
    console.log(data)
    expect(data).toEqual(input)
  })
})

afterAll(async () => {
  console.log(`\nNow you are ready to publish your agent, add secrets, and interact with your agent in the following steps:\n- Execute: 'npm run publish-agent'\n- Set secrets: 'npm run set-secrets'\n- Go to the url produced by setting the secrets (e.g. https://wapo-testnet.phala.network/ipfs/QmPQJD5zv3cYDRM25uGAVjLvXGNyQf9Vonz7rqkQB52Jae?key=b092532592cbd0cf)`)
})
