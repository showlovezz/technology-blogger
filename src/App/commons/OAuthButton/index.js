import React from 'react'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'

import { GOOGLE_CLIENT_ID } from '../../../../clientId'
import { APP_ID } from '../../../../appId'

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

export const FBButton = () => {
  const responseFacebook = (response) => {
    console.log(response)
  }

  return (
    <div className='fb-button'>
      <FacebookLogin
        appId={APP_ID}
        fields='name,email,picture'
        callback={responseFacebook}
        cssClass='facebook-button'
        icon='fab fa-facebook-square'
        textButton='Sign in with FB'
      />
    </div>
  )
}
