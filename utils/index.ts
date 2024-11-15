/**
 * 格式化數字為美式格式的字串
 *
 * @param value - 要格式化的數字
 * @returns 格式化後的字串
 *
 * @example
 * ```typescript
 * const formattedNumber = numberFormat(1234567.89)
 * console.log(formattedNumber) // "1,234,567.89"
 * ```
 */
export const numberFormat = (value: number): string => {
  const formatter = new Intl.NumberFormat('en-US')
  return formatter.format(value)
}
