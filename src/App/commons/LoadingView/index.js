import React from 'react'
import { Spinner } from 'react-bootstrap'

import './styles.scss'

const LoadingView = () => {
  return (
    <div className='loading-view'>
      <Spinner animation='border' />
      <div className='ml-2'>Loading.....</div>
    </div>
  )
}

export default LoadingView
