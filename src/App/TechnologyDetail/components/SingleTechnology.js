import React from 'react'
import PropTypes from 'prop-types'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import {
  StyledFacebookBtn,
  StyledTwitterBtn,
  StyledLinkedinBtn,
  StyledRedditBtn,
  StyledEmailBtn,
} from '../../commons/ShareIcon'
import { currentPicture, formatTimeWithoutSecs } from '../../commons/utils'

import { DEFAULT_SIZE } from '../const'

const SingleTechnology = ({ technology }) => {
  const {
    fields: {
      title,
      author,
      publish_date,
      comments,
      share_count,
      detail_picture_url,
      description,
      web_link,
      category,
    },
  } = technology

  return (
    <div className='detail-body'>
      <div className='detail-body__item'>
        <div className='item-card'>
          <h2 className='item-card__title'>{title}</h2>
          <div className='item-card__meta'>
            <span className='meta-author'>By&nbsp;<b>{author}</b></span>
            <span className='meta-date'>{formatTimeWithoutSecs(publish_date)}</span>
            <span className='meta-comment'>{comments.length} comments</span>
            <span className='meta-share'>{share_count} shares</span>
          </div>
          <img className='item-card__img img-fluid' src={currentPicture(detail_picture_url, DEFAULT_SIZE)} />
          <div className='item-card__desc'>
            {description}
          </div>
          <div className='item-card__tags'>Tags：
            <Badge className='tags-option' variant='dark'>{category}</Badge>
          </div>
          <div className='item-card__link'>
            <div className='web-link'>
              <Link target = '_blank' to={{ pathname: web_link }}>Website Link →</Link>
            </div>
            <div className='share-link'>
              <StyledFacebookBtn link={web_link} />
              <StyledTwitterBtn link={web_link} />
              <StyledLinkedinBtn link={web_link} />
              <StyledRedditBtn link={web_link} />
              <StyledEmailBtn link={web_link} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SingleTechnology.propTypes = {
  technology: PropTypes.object,
}

export default SingleTechnology
