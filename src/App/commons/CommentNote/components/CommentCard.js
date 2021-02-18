import React from 'react'
import PropTypes from 'prop-types'

import { currentPicture, formatTimeWithoutSecs } from '../../utils'

import { DEFAULT_SIZE } from '../const'

const CommentCard = ({ comment }) => {
  const {
    fields: {
      user_avatar,
      user_name,
      comment_date,
      user_comment,
    },
  } = comment

  return (
    <div className='comment-item'>
      <img className='item-img img-fluid' src={currentPicture(user_avatar, DEFAULT_SIZE)} />
      <div className='item-body'>
        <div className='item-body__meta'>
          <span className='meta-author'><b>{user_name}</b></span>
          <span className='meta-date'>{formatTimeWithoutSecs(comment_date)}</span>
        </div>
        <p className='item-body__description'>{user_comment}</p>
      </div>
    </div>
  )
}

CommentCard.propTypes = {
  comment: PropTypes.object,
}

export default CommentCard
