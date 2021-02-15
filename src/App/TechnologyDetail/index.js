import React from 'react'
import { Container, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { currentPicture } from '../../App/commons/utils'

import CommentNote from '../commons/CommentNote'

import fakeTechnologyDetail from './data/fakeTechnologyDetail'
import { DEFAULT_SIZE } from './const'
import './styles.scss'

const TechnologyDetail = () => {
  const {
    title,
    description,
    comment_count,
    publish_date,
    picture_url,
    author,
    share_count,
    share_link,
    tags,
  } = fakeTechnologyDetail

  return (
    <>
      <section className='blogger-detail'>
        <Container>
          <div className='detail-body'>
            <div className='detail-body__item'>
              <div className='item-card'>
                <h2 className='item-card__title'>{title}</h2>
                <div className='item-card__meta'>
                  <span className='meta-author'>By&nbsp;<b>{author}</b></span>
                  <span className='meta-date'>{publish_date}</span>
                  <span className='meta-comment'>{comment_count} comments</span>
                  <span className='meta-share'>{share_count} shares</span>
                </div>
                <img className='item-card__img img-fluid' src={currentPicture(picture_url, DEFAULT_SIZE)} />
                <div className='item-card__desc'>
                  {description}
                </div>
                <div className='item-card__tags'>Tags：&nbsp;
                  {
                    tags.map((tag, index) => {
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
        </Container>
      </section>
      <CommentNote />
    </>
  )
}

export default TechnologyDetail
