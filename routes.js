import React from 'react'

const UserLogin = React.lazy(() => import('./src/App/systems/UserLogin'))
const UserSignUp = React.lazy(() => import('./src/App/systems/UserSignUp'))
const TechnologyList = React.lazy(() => import('./src/App/TechnologyList'))
const Example = React.lazy(() => import('./src/App/systems/Example'))

const routes = [
  { path: '/login', exact: true, name: 'User Login', component: UserLogin },
  { path: '/signUp', exact: true, name: 'User SignUp', component: UserSignUp },
  { path: '/technologyList', exact: true, name: 'Technology List', component: TechnologyList },
  { path: '/example', exact: true, name: 'Example', component: Example },
]

export default routes
