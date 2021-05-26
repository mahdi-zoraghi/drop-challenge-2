import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { Input, Button } from "../../components"

import { register } from "../../store/reducer/authSlice/authSlice"

import { Wrapper, ButtonWrapper } from "./Register.styles"

import logo from "../../assets/img/logo.jpg"

const Register = ({ history }) => {
  const [user, setUser] = useState({ email: "", password: "" })
  const dispatch = useDispatch()
  const handleChangeInput = ({ target }) =>
    setUser(prevState => ({ ...prevState, [target.name]: target.value }))

  const handleRegister = e => {
    e.preventDefault()
    if (!user.email) return alert("please enter your email")
    if (!user.password) return alert("please enter your password")

    dispatch(register(user))
    history.push("/login")
  }

  return (
    <Wrapper onSubmit={handleRegister}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h2>Welcome!</h2>
        <Input
          type="email"
          placeholder="Enter e-mail or phone number"
          label="E-mail or phone number"
          value={user.email}
          name="email"
          onChange={handleChangeInput}
        />
        <Input
          type="password"
          placeholder="Enter password"
          label="Password"
          name="password"
          value={user.password}
          onChange={handleChangeInput}
        />
        <Link to="/login">Login page</Link>
        <ButtonWrapper>
          <Button color="primary" variant="contained" type="submit">
            Sign up
          </Button>
        </ButtonWrapper>
      </div>
    </Wrapper>
  )
}

export default Register
