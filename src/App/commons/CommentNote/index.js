import React from 'react'
import { Container } from 'react-bootstrap'

import CommentCard from './components/CommentCard'
import CommentForm from './components/CommentForm'
import fakeCommentList from './data/fakeCommentList'
import './styles.scss'

const CommentNote = () => {
  return (
    <section className='comment'>
      <Container>
        <div className='comment-form'>
          <CommentForm />
        </div>
        <div className='comment-block'>
          {
            fakeCommentList.map((comment, index) => {
              return (
                <CommentCard comment={comment} key={index} />
              )
            })
          }
        </div>
      </Container>
    </section>
  )
}

export default CommentNote
