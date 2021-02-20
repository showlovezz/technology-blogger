import React from 'react'
import PropTypes from 'prop-types'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { currentPicture, stringToArray, formatTimeWithoutSecs } from '../../../App/commons/utils'

const TechnologyCard = ({ datum }) => {
  const {
    id,
    fields: {
      title,
      description,
      comments,
      publish_date,
      list_picture_url,
      author,
      share_count,
      tags,
    },
  } = datum

  const tagList = stringToArray(tags)
  const url = `/technologyList/${id}`

  return (
    <div className='blogger-list__item'>
      <img className='img-fluid item-img' src={currentPicture(list_picture_url)} />
      <div className='item-body'>
        <h3>{title}</h3>
        <div className='item-body__meta'>
          <span className='meta-author'>By&nbsp;<b>{author}</b></span>
          <span className='meta-date'>{formatTimeWithoutSecs(publish_date)}</span>
          <span className='meta-comment'>{comments.length} comments</span>
          <span className='meta-share'>{share_count} shares</span>
        </div>
        <div className='item-body__intro'>{description}</div>
        <div className='item-body__tags'>Tags&nbsp;
          {
            tagList.map((tag, index) => {
              return (
                <Badge className='tags-option' variant='dark' key={index}>{tag}</Badge>
              )
            })
          }
        </div>
        <Link className='item-body__link' to={url}>Read more →</Link>
      </div>
    </div>
  )
}

TechnologyCard.propTypes = {
  datum: PropTypes.object,
}

export default TechnologyCard
