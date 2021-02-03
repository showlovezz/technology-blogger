import React from 'react'
import { Form, Button } from 'react-bootstrap'

const UserSignUpForm = () => {
  return (
    <Form>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          required
        />
        <Form.Control.Feedback type='invalid'>
          Please input email.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId='formBasicName'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter name'
          required
        />
        <Form.Control.Feedback type='invalid'>
          Please input name.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          required
        />
        <Form.Control.Feedback type='invalid'>
          Please input password.
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant='primary' type='submit' block>
        加入會員
      </Button>
    </Form>
  )
}

export default UserSignUpForm
