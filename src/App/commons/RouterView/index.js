import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import LoaderView from '../../commons/LoaderView'

import routes from '../../../../routes'

const RouterView = () => {
  return (
    <Suspense fallback={<LoaderView />}>
      <Switch>
        {
          routes.map((route, index) => {
            if (!route.component) return null
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={() => (<route.component />)}
              />
            )
          })
        }
        <Route render={() => <Redirect to={{ pathname: '/technologyList' }} />} />
      </Switch>
    </Suspense>
  )
}

export default RouterView
