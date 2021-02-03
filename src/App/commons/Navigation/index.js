import React from 'react'
import { Navbar, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './styles.scss'

{/* <Link to='/'>Home</Link>
<Link to='/login'>Login</Link>
<Link to='/signUp'>SignUp</Link>
<Link to='/technologyList'>Technology List</Link> */}

const Navigation = () => {
  return (
    <Navbar bg='primary' variant='dark' sticky='top' className='mb-5'>
      <Navbar.Brand>
        <Link to='/login'>Home</Link>
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
