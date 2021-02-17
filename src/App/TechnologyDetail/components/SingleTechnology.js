import React from 'react'
import PropTypes from 'prop-types'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { currentPicture, stringToArray, formatTimeWithoutSecs } from '../../commons/utils'

import { DEFAULT_SIZE } from '../const'

const SingleTechnology = ({ technology }) => {
  const {
    fields: {
      title,
      author,
      publish_date,
      comment_count,
      share_count,
      detail_picture_url,
      description,
      tags,
      share_link,
    },
  } = technology

  const tagList = stringToArray(tags)

  return (
    <div className='detail-body'>
      <div className='detail-body__item'>
        <div className='item-card'>
          <h2 className='item-card__title'>{title}</h2>
          <div className='item-card__meta'>
            <span className='meta-author'>By&nbsp;<b>{author}</b></span>
            <span className='meta-date'>{formatTimeWithoutSecs(publish_date)}</span>
            <span className='meta-comment'>{comment_count} comments</span>
            <span className='meta-share'>{share_count} shares</span>
          </div>
          <img className='item-card__img img-fluid' src={currentPicture(detail_picture_url, DEFAULT_SIZE)} />
          <div className='item-card__desc'>
            {description}
          </div>
          <div className='item-card__tags'>Tags：&nbsp;
            {
              tagList.map((tag, index) => {
                return (
                  <Badge className='tags-option' variant='dark' key={index}>{tag}</Badge>
                )
              })
            }
          </div>
          <Link className='item-card__link' target = '_blank' to={{ pathname: share_link }}>Website Link →</Link>
        </div>
      </div>
    </div>
  )
}

SingleTechnology.propTypes = {
  technology: PropTypes.object,
}

export default SingleTechnology
