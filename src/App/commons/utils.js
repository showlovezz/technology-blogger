import defaultPhoto from '../../assets/img/place-holder110x110.png'

export const currentPicture = (picture_url) => {
  let pictureRrl = ''
  if (!picture_url) {
    pictureRrl = defaultPhoto
  } else {
    pictureRrl = picture_url
  }

  return pictureRrl
}
