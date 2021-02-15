import React from 'react'
import { Form, Button } from 'react-bootstrap'

const CommentForm = () => {
  return (
    <Form className='comment-form__body'>
      <Form.Group controlId='exampleForm.ControlTextarea1'>
        <Form.Control as='textarea' rows={3} />
      </Form.Group>
      <Button variant='primary' type='submit' size='sm'>
        Send Comment
      </Button>
    </Form>
  )
}

export default CommentForm
