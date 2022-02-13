import { IImage } from '../models/IImage'
import { IMG_SIZE } from '../models/EnumImageSize'
import { CONST } from '../constants'

export const getImage = (
  show: { image: IImage },
  size: IMG_SIZE = IMG_SIZE.MEDIUM
): string => {
  if (size === IMG_SIZE.MEDIUM)
    return show?.image?.medium ? show?.image?.medium : CONST.IMG_PLACEHOLDER
  if (size === IMG_SIZE.LARGE)
    return show?.image?.original ? show?.image?.original : CONST.IMG_PLACEHOLDER
}

export const parseString = (str: string | number): string | number =>
  str ? str : '▬'
