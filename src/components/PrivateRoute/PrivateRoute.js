import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom"

import Dashboard from "../../layouts/DashboardLayout"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = useSelector(state => state.auth.token)

  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Dashboard>
            <Component {...props} />
          </Dashboard>
        ) : (
          <Redirect
            to={{
              pathname: "/register",
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
