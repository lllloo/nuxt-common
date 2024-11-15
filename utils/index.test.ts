import { it, describe, expect } from 'vitest'

describe('numberFormat', () => {
  it('should format number with commas and decimal point', () => {
    const result = numberFormat(1234567.89)
    expect(result).toBe('1,234,567.89')
  })

  it('should format integer number with commas', () => {
    const result = numberFormat(1234567)
    expect(result).toBe('1,234,567')
  })

  it('should format small number without commas', () => {
    const result = numberFormat(123)
    expect(result).toBe('123')
  })

  it('should format number with two decimal places', () => {
    const result = numberFormat(1234.56)
    expect(result).toBe('1,234.56')
  })

  it('should format negative number correctly', () => {
    const result = numberFormat(-1234567.89)
    expect(result).toBe('-1,234,567.89')
  })
})
