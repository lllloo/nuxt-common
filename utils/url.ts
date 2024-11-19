import qs from 'qs'

type ParseParameters = Parameters<typeof qs.parse>
type StringifyParameters = Parameters<typeof qs.stringify>
/**
 * 解析 URL 中的查詢參數。
 *
 * @param url - 要解析的 URL 字串(預設忽略前綴問號)。
 * @param options - 傳遞給 `qs.parse` 的選項參數。
 * @returns 解析後的查詢參數物件。
 * const url = '?name=John&age=30';
 * getQueryParams(url); // { name: 'John', age: '30' }
 */
export const getQueryParams = (url: string, options: ParseParameters[1]) => {
  return qs.parse(url, {
    ignoreQueryPrefix: true /* 忽略前綴問號 */,
    ...options,
  })
}

/**
 * 將物件轉換為 URL 查詢字符串(預設arrayFormat使用repeat)。
 *
 * @param params - 包含查詢參數的物件。
 * @param options - 轉換選項。
 * @returns URL 查詢字符串。
 *
 * @example
 * const params = { name: 'John', age: '30' , a: ['b', 'c'] };
 * objectToQueryString(params, {arrayFormat: 'repeat'}); // 'name=John&age=30&a=b&a=c'
 */
export function objectToQueryString(
  params: StringifyParameters[0],
  options: StringifyParameters[1],
) {
  return qs.stringify(params, {
    arrayFormat: 'repeat',
    ...options,
  })
}
