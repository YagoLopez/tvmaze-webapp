export const getImage = (show: { image: { medium: string } }): string =>
  show.image?.medium ? show.image.medium : '/img-placeholder.jpg'
