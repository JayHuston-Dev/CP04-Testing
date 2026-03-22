import { describe, it, expect } from 'vitest'
import { calculateTotal } from './calculateTotal.js'

describe('calculateTotal', () => {
  it('adds numbers correctly', () => {
    const result = calculateTotal([10, 20, 5])
    expect(result).toBe(35)
  })

  it('returns 0 for an empty array', () => {
    expect(calculateTotal([])).toBe(0)
  })
})
