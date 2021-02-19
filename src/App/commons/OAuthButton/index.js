import React from 'react'
import GoogleLogin from 'react-google-login'

import { GOOGLE_CLIENT_ID } from '../../../../clientId'

import './styles.scss'

export const GoogleButton = () => {
  const responseGoogle = (response) => {
    console.log(response)
  }

  return (
    <div className='google-button'>
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        buttonText='Sign in with Google'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy='single_host_origin'
      />
    </div>
  )
}
