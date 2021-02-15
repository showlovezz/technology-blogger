import React from 'react'
import PropTypes from 'prop-types'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { currentPicture } from '../../../App/commons/utils'

const TechnologyCard = ({ datum }) => {
  const {
    id,
    title,
    intro,
    comment_count,
    publish_date,
    picture_url,
    author,
    share_count,
    tags,
  } = datum

  const url = `/technologyList/${id}`

  return (
    <div className='blogger-list__item'>
      <img className='img-fluid item-img' src={currentPicture(picture_url)} />
      <div className='item-body'>
        <h3>{title}</h3>
        <div className='item-body__meta'>
          <span className='meta-author'>By&nbsp;<b>{author}</b></span>
          <span className='meta-date'>{publish_date}</span>
          <span className='meta-comment'>{comment_count} comments</span>
          <span className='meta-share'>{share_count} shares</span>
        </div>
        <div className='item-body__intro'>{intro}</div>
        <div className='item-body__tags'>Tags&nbsp;
          {
            tags.map((tag, index) => {
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
