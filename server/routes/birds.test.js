import request from 'supertest'
import server from '../server.js'
import db from '../db/connection.js'
import { beforeAll, beforeEach, afterAll, describe, it, expect } from 'vitest'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

afterAll(async () => {
  await db.destroy()
})

describe('GET /birds', () => {
  it('returns birds', async () => {
    const res = await request(server).get('/api/v1/birds')

    expect(res.status).toBe(200)
    expect(res.body.length).toBe(3)
  })
})

describe('POST /birds', () => {
  it('creates bird', async () => {
    const res = await request(server).post('/api/v1/birds').send({
      name: 'Fantail',
      scientific_name: 'Rhipidura fuliginosa',
    })

    expect(res.status).toBe(201)
    expect(res.body.name).toBe('Fantail')
  })
})
