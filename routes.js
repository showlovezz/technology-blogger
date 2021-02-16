import React from 'react'

const UserLogin = React.lazy(() => import('./src/App/systems/UserLogin'))
const UserSignUp = React.lazy(() => import('./src/App/systems/UserSignUp'))
const UserList = React.lazy(() => import('./src/App/UserList'))
const TechnologyList = React.lazy(() => import('./src/App/TechnologyList'))
const TechnologyDetail = React.lazy(() => import('./src/App/TechnologyDetail'))

const routes = [
  { path: '/login', exact: true, name: 'User Login', component: UserLogin },
  { path: '/signUp', exact: true, name: 'User SignUp', component: UserSignUp },
  { path: '/userList', exact: true, name: 'User List', component: UserList },
  { path: '/technologyList', exact: true, name: 'Technology List', component: TechnologyList },
  { path: '/technologyList/:id', exact: true, name: 'Technology Detail', component: TechnologyDetail },

]

export default routes
