import React, { useMemo } from 'react'
import { Navbar, Form, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

import './styles.scss'

const Navigation = () => {
  const location = useLocation()

  if (location.pathname === '/signUp') return <></>
  if (location.pathname === '/login') return <></>

  return (
    <Navbar bg='primary' variant='dark' sticky='top' className='mb-5'>
      <Navbar.Brand>
        <Link to='/'>Home</Link>
      </Navbar.Brand>
      <Navbar.Collapse className='justify-content-end mr-3'>
        <Navbar.Text>
          111
        </Navbar.Text>
      </Navbar.Collapse>
      <Form inline>
        <Button variant='outline-light'>
          111
        </Button>
      </Form>
    </Navbar>
  )
}

export default Navigation
