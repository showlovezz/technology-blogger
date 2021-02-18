import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'

import LoadingView from '../LoadingView'

import CommentCard from './components/CommentCard'
import CommentForm from './components/CommentForm'
import useFetchCommentList from './hooks/useFetchCommentList'
import './styles.scss'

const CommentNote = ({ technology }) => {
  const { fields: { comments } } = technology
  const [commentList, fetchStatus] = useFetchCommentList(comments)

  if (fetchStatus === 'Loading') {
    return <LoadingView />
  }

  return (
    <section className='comment'>
      <Container>
        <div className='comment-form'>
          <CommentForm />
        </div>
        <div className='comment-block'>
          {
            commentList.map((comment, index) => {
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

CommentNote.propTypes = {
  technology: PropTypes.object,
}

export default CommentNote
