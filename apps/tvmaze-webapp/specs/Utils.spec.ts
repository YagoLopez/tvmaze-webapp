import { getImage, parseString } from '../utils'
import { MockTvShow } from './MockTvShow'
import { IMG_SIZE } from '../models/EnumImageSize'
import { CONST } from '../constants'

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

describe('Test getImg() fn', () => {
  it('should return medium image', () => {
    const res = getImage(MockTvShow.show)
    expect(res).toEqual(
      'https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg'
    )
  })

  it('should return large image', () => {
    const res = getImage(MockTvShow.show, IMG_SIZE.LARGE)
    expect(res).toEqual(
      'https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg'
    )
  })

  it('should return image placeholder', () => {
    const res = getImage(undefined)
    expect(res).toEqual(CONST.IMG_PLACEHOLDER)
  })

  it('should return image placeholder', () => {
    const res = getImage(null)
    expect(res).toEqual(CONST.IMG_PLACEHOLDER)
  })
})
