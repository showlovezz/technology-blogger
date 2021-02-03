import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

// import UserRegistrationTitle from "../../common/layout/UserRegistrationTitle";

import UserSignUpForm from './components/UserSignUpForm'
import './styles.scss'

const UserSignUp = () => {
  return (
    <Container>
      <Row>
        {/* <Col md={{ span: 4, offset: 4 }}>
          <UserRegistrationTitle />
        </Col> */}
        <Col md={{ span: 4, offset: 4 }}>
          <Card bg='light' text='dark' className='mb-2'>
            <Card.Header>User UserSignUp</Card.Header>
            <Card.Body>
              <UserSignUpForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default UserSignUp
