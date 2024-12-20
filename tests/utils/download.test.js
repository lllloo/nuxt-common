import { describe, it, expect, vi, afterEach } from 'vitest'

describe('downloadFile', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('應該創建一個鏈接並觸發下載', () => {
    const link = document.createElement('a')
    const clickSpy = vi.spyOn(link, 'click')
    vi.spyOn(document, 'createElement').mockReturnValue(link)

    downloadFile('http://example.com/file.txt', 'file.txt')

    expect(link.href).toBe('http://example.com/file.txt')
    expect(link.download).toBe('file.txt')
    expect(clickSpy).toHaveBeenCalled()
  })
})

describe('downloadBlob', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('應該創建一個對象URL並觸發下載', () => {
    const blob = new Blob(['test'], { type: 'text/plain' })
    const mockUrl = 'blob:http://example.com/blob'
    const createObjectURLSpy = vi.spyOn(window.URL, 'createObjectURL').mockReturnValue(mockUrl)
    const revokeObjectURLSpy = vi.spyOn(window.URL, 'revokeObjectURL')
    const mockDownloadFile = vi.fn()

    downloadBlob(blob, mockDownloadFile)

    expect(mockDownloadFile).toHaveBeenCalled()
    expect(createObjectURLSpy).toHaveBeenCalledWith(blob)
    expect(revokeObjectURLSpy).toHaveBeenCalledWith(mockUrl)
  })

  it('如果未提供函數，應該使用默認的下載檔案函數', () => {
    const blob = new Blob(['test'], { type: 'text/plain' })
    const mockUrl = 'blob:http://example.com/blob'
    const createObjectURLSpy = vi.spyOn(window.URL, 'createObjectURL').mockReturnValue(mockUrl)
    const revokeObjectURLSpy = vi.spyOn(window.URL, 'revokeObjectURL')
    const clickSpy = vi.fn()
    vi.spyOn(document, 'createElement').mockReturnValue({ click: clickSpy })

    downloadBlob(blob)

    expect(clickSpy).toHaveBeenCalled()
    expect(createObjectURLSpy).toHaveBeenCalledWith(blob)
    expect(revokeObjectURLSpy).toHaveBeenCalledWith(mockUrl)
  })
})
