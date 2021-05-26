import { Route, Switch } from "react-router-dom"
import { v4 as uuIdv4 } from "uuid"

import { PrivateRoute } from "./components"

import routes from "./routes"

const Router = () => (
  <Switch>
    {routes.map(route =>
      route.isPrivate ? (
        <PrivateRoute key={uuIdv4()} {...route} />
      ) : (
        <Route key={uuIdv4()} {...route} />
      )
    )}
  </Switch>
)

export default Router
