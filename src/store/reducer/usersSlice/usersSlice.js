import { createSlice } from "@reduxjs/toolkit"

const UsersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    total_page: 0,
  },
  reducers: {
    setUsers(state, action) {
      return action.payload
    },
    clearUsers(state, action) {
      return {
        data: [],
        total_page: 0,
      }
    },
    deleteUser(state, action) {
      const newUsersList = state.data.filter(user => user.id !== action.payload)
      return {
        ...state,
        data: newUsersList,
      }
    },
    editUser(state, action) {
      state.data.forEach((user, index) => {
        if (user.id === action.payload.id) {
          state.data[index] = action.payload
        }
      })
    },
  },
})

export const { setUsers, clearUsers, deleteUser, editUser } = UsersSlice.actions

export default UsersSlice.reducer
