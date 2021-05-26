import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuIdv4 } from "uuid"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    password: "",
    token: "",
  },
  reducers: {
    register(state, action) {
      return action.payload
    },
    login(state, action) {
      if (action.payload.email !== state.email)
        return alert("this email not defined")
      if (action.payload.password !== state.password)
        return alert("this password not defined")

      state.token = uuIdv4()
    },
    logOut(state, action) {
      state.token = ""
    },
  },
})

export const { register, login, logOut } = authSlice.actions

export default authSlice.reducer
