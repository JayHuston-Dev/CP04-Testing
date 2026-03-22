import { describe, it, expect } from 'vitest'
import nock from 'nock'
import { fetchBirdFact } from './birdFact.js'

describe('API mocking', () => {
  it('returns mocked data', async () => {
    nock('https://api.adviceslip.com')
      .get('/advice')
      .reply(200, {
        slip: { advice: 'Birds are cool' },
      })

    const result = await fetchBirdFact()

    expect(result.slip.advice).toBe('Birds are cool')
  })
})
