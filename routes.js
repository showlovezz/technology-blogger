import React from 'react'

const UserLogin = React.lazy(() => import('./src/App/systems/UserLogin'))
const UserSignUp = React.lazy(() => import('./src/App/systems/UserSignUp'))
const UserList = React.lazy(() => import('./src/App/UserList'))
const TechnologyList = React.lazy(() => import('./src/App/TechnologyList'))
const TechnologyDetail = React.lazy(() => import('./src/App/TechnologyDetail'))
const TrainingGroupList = React.lazy(() => import('./src/App/TrainingGroupList'))
const BookList = React.lazy(() => import('./src/App/BookList'))

const routes = [
  { path: '/login', exact: true, name: 'User Login', component: UserLogin },
  { path: '/signUp', exact: true, name: 'User SignUp', component: UserSignUp },
  { path: '/userList', exact: true, name: 'User List', component: UserList },
  { path: '/technologyList', exact: true, name: 'Technology List', component: TechnologyList },
  { path: '/technologyList/:id', exact: true, name: 'Technology Detail', component: TechnologyDetail },
  { path: '/trainingGroupList', exact: true, name: 'TrainingGroup List', component: TrainingGroupList },
  { path: '/bookList', exact: true, name: 'Book List', component: BookList },
]

export default routes
