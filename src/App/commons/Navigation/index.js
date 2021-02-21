import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import { Link, useLocation, useHistory } from 'react-router-dom'

import './styles.scss'

const Navigation = () => {
  const location = useLocation()
  const history = useHistory()

  if (location.pathname === '/signUp') return <></>
  if (location.pathname === '/login') return <></>

  const handleGoToSignUpPage = () => {
    history.push('/signUp')
  }

  return (
    <Container>
      <header>
        <Row className='align-items-center'>
          <Col xl={4} xs={3}>
            <div className='header__home'>
              <p><Link to='/technologyList'>Home</Link></p>
            </div>
          </Col>
          <Col xl={4} xs={6}>
            <div className='header__logo'>
              <h3>Technology</h3>
            </div>
          </Col>
          <Col xl={4} xs={3}>
            <div className='header__login'>
              <Button variant='outline-secondary' size='sm' onClick={handleGoToSignUpPage}>Sign up</Button>
            </div>
          </Col>
        </Row>
      </header>
      <div className='nav-scroller py-1 mb-2'>
        <nav className='nav d-flex justify-content-between'>
          <Link className='p-2 text-muted' to='/technologyList'>Technology List</Link>
          <Link className='p-2 text-muted' to='/trainingGroupList'>TrainingGroup List</Link>
          <Link className='p-2 text-muted' to='/bookList'>Book List</Link>
          <Link className='p-2 text-muted' to='/userList'>User List</Link>
          {/* <a className='p-2 text-muted' href='#'>U.S.</a>
          <a className='p-2 text-muted' href='#'>Technology</a>
          <a className='p-2 text-muted' href='#'>Design</a>
          <a className='p-2 text-muted' href='#'>Culture</a>
          <a className='p-2 text-muted' href='#'>Business</a>
          <a className='p-2 text-muted' href='#'>Politics</a>
          <a className='p-2 text-muted' href='#'>Opinion</a>
          <a className='p-2 text-muted' href='#'>Science</a>
          <a className='p-2 text-muted' href='#'>Health</a>
          <a className='p-2 text-muted' href='#'>Style</a>
          <a className='p-2 text-muted' href='#'>Travel</a> */}
        </nav>
      </div>
    </Container>
  )
}

export default Navigation
