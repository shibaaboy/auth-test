import React from "react"
import { Switch, Route, Redirect } from 'react-router-dom'
import { AuthPage } from "./pages/AuthPage"
import { PageFirst } from "./pages/PageFirst"
import { PageSecond } from "./pages/PageSecond"
import { RegistrationPage } from "./pages/RegistrationPage"

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/main" exact>
          <PageFirst />
        </Route>
        <Route path="/other" exact>
          <PageSecond />
        </Route>
        <Redirect to="/main" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Route path="/reg" exact>
        <RegistrationPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}