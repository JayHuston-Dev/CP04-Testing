import { beforeAll, beforeEach, afterAll, describe, it, expect } from 'vitest'
import db from './connection.js'
import { getAllBirds, addBird } from './index.js'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

afterAll(async () => {
  await db.destroy()
})

describe('DB tests', () => {
  it('gets all birds', async () => {
    const birds = await getAllBirds()
    expect(birds).toHaveLength(3)
  })

  it('adds a bird', async () => {
    const newBird = await addBird({
      name: 'Pukeko',
      scientific_name: 'Porphyrio melanotus',
    })

    expect(newBird.name).toBe('Pukeko')
  })
})
