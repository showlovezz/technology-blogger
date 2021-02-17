import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import { currentPicture } from '../../commons/utils'

import { DEFAULT_SIZE } from '../const'

const UserCard = ({ user }) => {
  const {
    fields: {
      user_name,
      user_avatar,
      job_title,
      github_link,
      facebook_link,
      twitter_link,
      instagram_link,
      post_count,
    },
  } = user

  return (
    <Col xs='12' xl='4'>
      <div className='user-card'>
        <div className='user-profile'>
          <img className='user-profile__img img-fluid' src={currentPicture(user_avatar, DEFAULT_SIZE)} />
          <h5>{user_name}</h5>
          <p>{job_title}</p>
          <div className='user-profile__icon'>
            <span>
              <Link className='item-card__link' target = '_blank' to={{ pathname: github_link }}>
                <FontAwesomeIcon icon={['fab', 'github']} />
              </Link>
            </span>
            <span>
              <Link className='item-card__link' target = '_blank' to={{ pathname: facebook_link }}>
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </Link>
            </span>
            <span>
              <Link className='item-card__link' target = '_blank' to={{ pathname: twitter_link }}>
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </Link>
            </span>
            <span>
              <Link className='item-card__link' target = '_blank' to={{ pathname: instagram_link }}>
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </Link>
            </span>
          </div>
        </div>
        <div className='user-stats'>
          <div className='user-stats__post'>
            <h5>{post_count}</h5>
            <p>POSTS</p>
          </div>
        </div>
      </div>
    </Col>
  )
}

UserCard.propTypes = {
  user: PropTypes.object,
}

export default UserCard
