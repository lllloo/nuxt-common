import { describe, it, expect, vi, afterEach } from 'vitest'
describe('downloadFile', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('應該創建一個鏈接並觸發下載', () => {
    const link = document.createElement('a')
    const clickSpy = vi.spyOn(link, 'click')
    const createElementSpy = vi.spyOn(document, 'createElement').mockReturnValue(link)

    downloadFile('http://example.com/file.txt', 'file.txt')

    expect(createElementSpy).toHaveBeenCalledWith('a')
    expect(clickSpy).toHaveBeenCalled()

    expect(link.href).toBe('http://example.com/file.txt')
    expect(link.download).toBe('file.txt')
  })
})

describe('downloadBlob', () => {
  it('should create an object URL and trigger download', () => {
    const createObjectURLSpy = vi.spyOn(window.URL, 'createObjectURL')
    const revokeObjectURLSpy = vi.spyOn(window.URL, 'revokeObjectURL')
    createObjectURLSpy.mockReturnValueOnce('blob:http://example.com/blob')
    const downloadFile = vi.fn()

    const blob = new Blob(['test'], { type: 'text/plain' })
    downloadBlob(blob, downloadFile)

    expect(createObjectURLSpy).toHaveBeenCalledWith(blob)
    expect(downloadFile).toHaveBeenCalled()
    expect(revokeObjectURLSpy).toHaveBeenCalledWith('blob:http://example.com/blob')
  })
})
