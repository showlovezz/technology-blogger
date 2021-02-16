import photo943Size from '../../assets/img/placeholder-943x395.png'
import photo110Size from '../../assets/img/placeholder-110x110.png'
import photo100Size from '../../assets/img/placeholder-100x100.png'
import photo50Size from '../../assets/img/placeholder-50x50.png'
import photo80Size from '../../assets/img/placeholder-80x80.png'

// fortawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)
// fortawesome

export const currentPicture = (picture_url, size) => {
  let pictureRrl = ''
  if (!picture_url) {
    switch (size) {
      case '943PX':
        pictureRrl = photo943Size
        break
      case '100PX':
        pictureRrl = photo100Size
        break
      case '80PX':
        pictureRrl = photo80Size
        break
      case '50PX':
        pictureRrl = photo50Size
        break
      default:
        pictureRrl = photo110Size
    }
  } else {
    pictureRrl = picture_url
  }

  return pictureRrl
}
