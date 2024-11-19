/**
 * 從給定的 URL 獲取圖片資訊。
 *
 * @param url - 圖片的 URL。
 * @returns 包含圖片寬度和高度的 Promise。
 * @throws 如果圖片加載失敗，則返回錯誤。
 */
export const getImageInfo = async (url: string) => {
  const img = new Image()
  return new Promise<{ width: number; height: number }>((resolve, reject) => {
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
      })
    }
    img.onerror = (error) => {
      reject(error)
    }
    img.src = url
  })
}


/**
 * 將 base64 字串轉換為 Blob 物件。
 *
 * @param base64 - 要轉換的 base64 編碼字串。
 * @param type - 生成的 Blob 的 MIME 類型。預設為 'image/png'。
 * @returns 表示 base64 字串二進位數據的 Blob 物件。
 * 
 * @example
 * const base64 = 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABjElEQVRIS+2VvUoDQRSGv7VQ
 * base64ToBlob(base64).then((blob) => {
 *   console.log(blob)
 * })
 */
export const base64ToBlob = (base64: string, type = 'image/png') => {
  const binStr = window.atob(base64.split(',')[1])
  const len = binStr.length
  const arr = new Uint8Array(len)
  for (let i = 0; i < len; i++) {
    arr[i] = binStr.charCodeAt(i)
  }
  return new Blob([arr], { type })
}