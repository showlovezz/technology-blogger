import photo110Size from '../../assets/img/placeholder-110x110.png'
import photo943Size from '../../assets/img/placeholder-943x395.png'

export const currentPicture = (picture_url, size) => {
  let pictureRrl = ''
  if (!picture_url) {
    switch (size) {
      case '943PX':
        pictureRrl = photo943Size
        break
      default:
        pictureRrl = photo110Size
    }
  } else {
    pictureRrl = picture_url
  }

  return pictureRrl
}
