import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

import {
  StyledSection,
  StyledFlex,
  StyledFormBlock,
  StyledFormCard,
  StyledFormBody,
  StyledFormGroup,
  StyledUserLink,
  StyledDescBlock,
  StyledDescCard,
  StyledDescBody,
} from '../../commons/components/UserEntry'
import { GoogleButton } from '../../commons/OAuthButton'

import './styles.scss'

const UserSignUp = () => {
  return (
    <StyledSection page='signUp'>
      <Container>
        <StyledFlex>
          <StyledFormBlock>
            <StyledFormCard>
              <StyledFormBody>
                <h3 className='user-form__title'>User Sign Up</h3>
                <p className='user-form__subtitle'>Please input to your account</p>
                <StyledFormGroup>
                  <Form className='user-input-group'>
                    <Form.Group controlId='formBasicEmail'>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type='email' placeholder='Enter email' />
                      <Form.Text className='text-muted'>
                        We will never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId='formBasicPassword' className='mb-5'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type='password' placeholder='Password' />
                    </Form.Group>
                    <Button type='submit' className='btn-color' block>
                      Submit
                    </Button>
                  </Form>
                </StyledFormGroup>
                <StyledUserLink>
                  <p>Have an account ?</p>
                  <button>Login</button>
                </StyledUserLink>
                <GoogleButton />
              </StyledFormBody>
            </StyledFormCard>
          </StyledFormBlock>
          <StyledDescBlock page='signUp'>
            <StyledDescCard>
              <StyledDescBody>
                <h3>We are more than just a company</h3>
                <p className='text-small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </StyledDescBody>
            </StyledDescCard>
          </StyledDescBlock>
        </StyledFlex>
      </Container>
    </StyledSection>
  )
}

export default UserSignUp
