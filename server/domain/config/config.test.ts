import { describe, expect, it } from 'vitest'
import { parseConfig } from './config'

describe('config', async () => {
  it('should load the contents of config.example.json', async () => {
    const config = parseConfig('config.example.json')
    expect(config).toEqual(expect.any(Object))
  })

  it('should throw exception due file does not exist', async () => {
    expect(() => parseConfig('GARPABE_FILE.txt')).toThrowError(/ENOENT: no such file or directory/)
  })
})
