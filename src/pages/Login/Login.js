import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { Input, Button } from "../../components"

import { login } from "../../store/reducer/authSlice/authSlice"

import { Wrapper, Logo, ButtonWrapper } from "./Login.styles"

import logo from "../../assets/img/logo.jpg"

const Login = ({ history }) => {
  const [user, setUser] = useState({ email: "", password: "" })
  const dispatch = useDispatch()
  const handleChangeInput = ({ target }) =>
    setUser(prevState => ({ ...prevState, [target.name]: target.value }))

  const handleRegister = e => {
    e.preventDefault()
    if (!user.email) return alert("please enter your email")
    if (!user.password) return alert("please enter your password")

    dispatch(login(user))
    history.push("/")
  }

  return (
    <Wrapper onSubmit={handleRegister}>
      <Logo src={logo} alt="logo" />
      <h2>Welcome back!</h2>
      <Input
        type="text"
        placeholder="Enter e-mail or phone number"
        label="E-mail or phone number"
        value={user.email}
        name="email"
        onChange={handleChangeInput}
      />
      <Input
        type="text"
        placeholder="Enter password"
        label="Password"
        name="password"
        value={user.password}
        onChange={handleChangeInput}
      />
      <Link to="/register">Register page</Link>
      <ButtonWrapper>
        <Button color="primary" variant="contained" type="submit">
          Log in
        </Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Login
