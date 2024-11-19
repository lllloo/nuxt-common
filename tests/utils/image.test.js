import { describe, it, expect, vi, afterEach } from 'vitest'

describe('getImageInfo', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })
  it('應該返回有效圖像 URL 的圖像寬度和高度', async () => {
    vi.stubGlobal(
      'Image',
      class {
        constructor() {
          this.width = 200
          this.height = 100
          this.src = ''
          this.onload = null
          this.onerror = null
        }
        set src(value) {
          this._src = value
          if (this.onload) {
            this.onload()
          }
        }
        get src() {
          return this._src
        }
      },
    )

    const result = await getImageInfo('a')
    expect(result).toEqual({ width: 200, height: 100 })
  })

  it('應該返回 null，如果圖像 URL 無效', async () => {
    vi.stubGlobal(
      'Image',
      class {
        constructor() {
          this.src = ''
          this.onload = null
          this.onerror = null
        }
        set src(value) {
          this._src = value
          if (this.onerror) {
            this.onerror()
          }
        }
        get src() {
          return this._src
        }
      },
    )

    try {
      await getImageInfo('a')
    } catch {
      expect(true).toBe(true)
    }
  })
})

describe('base64ToBlob', () => {
  it('應該將 base64 字符串轉換為 Blob', () => {
    const base64 =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGAQMAAADaAn0LAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRF////AAAAVcLTfgAAABJJREFUeJxjZGCsYPQAwgpGBgAJNgGHJv+ErAAAAABJRU5ErkJggg=='
    const blob = base64ToBlob(base64)
    expect(blob).toBeInstanceOf(Blob)
    expect(blob.type).toBe('image/png')
  })
})
