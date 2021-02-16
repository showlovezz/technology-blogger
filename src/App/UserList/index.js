import React from 'react'
import { Container, Row } from 'react-bootstrap'

import UserCard from './components/UserCard'
import fakeUserList from './data/fakeUserList'
import './styles.scss'

const UserList = () => {
  return (
    <section className='user-area'>
      <Container>
        <Row>
          {
            fakeUserList.map((user, index) => {
              return (
                <UserCard user={user} key={index} />
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default UserList
