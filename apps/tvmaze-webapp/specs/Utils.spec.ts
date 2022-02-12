import { parseString } from '../utils'

describe('Test parseString() fn', () => {
  const string1 = 'string1'
  const dashString = '-'
  it('should return input string if no empty', () => {
    const res = parseString(string1)
    expect(res).toEqual(string1)
  })
  it('should return "-" string if input string is undefined', () => {
    const res = parseString(undefined)
    expect(res).toEqual(dashString)
  })
  it('should return "-" string if input string is null', () => {
    const res = parseString(null)
    expect(res).toEqual(dashString)
  })
})
