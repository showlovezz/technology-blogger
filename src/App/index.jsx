import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import RouterView from '../App/commons/RouterView'
import '../assets/scss/all.scss'

import Navigation from './commons/Navigation'

const App = () => {

  return (
    <BrowserRouter>
      <Navigation />
      <RouterView />
    </BrowserRouter>
  )
}

export default App
