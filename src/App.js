import { Provider } from "react-redux"
import { CssBaseline } from "@material-ui/core"
import { BrowserRouter } from "react-router-dom"

import GlobalStyle from "./styles/global"
import Router from "./Router"

import store from "./store"

const App = () => (
  <>
    <CssBaseline />
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </>
)

export default App
