import { useState } from "react"
import { useDispatch } from "react-redux"

import { Input, Button } from "../../components"

import { Wrapper } from "./CreateUser.styles"

import { createUser } from "../../store/actions"

const CreateUser = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  })
  const dispatch = useDispatch()
  const handleChangeInput = ({ target }) =>
    setUser(prevState => ({ ...prevState, [target.name]: target.value }))

  const handleCreateUser = e => {
    e.preventDefault()
    if (!user.first_name) return alert("Please Enter your Name")
    if (!user.last_name) return alert("Please Enter your Family")
    if (!user.email) return alert("Please Enter your Email")
    if (!user.avatar) return alert("Please Enter your Avatar")
    dispatch(createUser(user))
  }

  return (
    <Wrapper onSubmit={handleCreateUser}>
      <h1>CreateUser page</h1>
      <Input
        type="text"
        placeholder="Enter your name"
        label="Name"
        name="first_name"
        value={user.first_name}
        onChange={handleChangeInput}
      />
      <Input
        type="text"
        placeholder="Enter your family"
        label="Family"
        name="last_name"
        value={user.last_name}
        onChange={handleChangeInput}
      />
      <Input
        type="text"
        placeholder="Enter your email"
        label="Email"
        name="email"
        value={user.email}
        onChange={handleChangeInput}
      />
      <Input
        type="text"
        placeholder="Enter your Avatar URL"
        label="Avatar"
        name="avatar"
        value={user.avatar}
        onChange={handleChangeInput}
      />
      <Button color="primary" variant="contained" type="submit">
        Create User
      </Button>
    </Wrapper>
  )
}

export default CreateUser
