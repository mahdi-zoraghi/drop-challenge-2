import { createSlice } from "@reduxjs/toolkit"

const ResourcesSlice = createSlice({
  name: "resources",
  initialState: {
    data: [],
    total_page: 0,
  },
  reducers: {
    setResources(state, action) {
      return action.payload
    },
    clearResources(state, action) {
      return {
        data: [],
        total_page: 0,
      }
    },
  },
})

export const { setResources, clearResources } = ResourcesSlice.actions

export default ResourcesSlice.reducer
