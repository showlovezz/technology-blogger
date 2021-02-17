import React from 'react'
import { Container, Row } from 'react-bootstrap'

import useFetchUserList from './hooks/useFetchUserList'
import UserCard from './components/UserCard'
import './styles.scss'

const UserList = () => {
  const [userList] = useFetchUserList()

  return (
    <section className='user-area'>
      <Container>
        <Row>
          {
            userList.map((user, index) => {
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
