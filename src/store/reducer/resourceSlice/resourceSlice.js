import { createSlice } from "@reduxjs/toolkit"

const resourceSlice = createSlice({
  name: "resource",
  initialState: {},
  reducers: {
    setResource(state, action) {
      return action.payload
    },
    clearResource(state, action) {
      return {}
    },
  },
})

export const { setResource, clearResource } = resourceSlice.actions

export default resourceSlice.reducer
