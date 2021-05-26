import { createSlice } from "@reduxjs/toolkit"

const mainSlice = createSlice({
  name: "main",
  initialState: {
    loading: false,
    error: false,
  },
  reducers: {
    requested(state, action) {
      return {
        ...state,
        error: false,
        loading: true,
      }
    },
    failedRequest(state, action) {
      return {
        ...state,
        loading: false,
        error: true,
      }
    },
    successRequest(state, action) {
      return {
        ...state,
        error: false,
        loading: false,
      }
    },
  },
})

export const { requested, failedRequest, successRequest } = mainSlice.actions

export default mainSlice.reducer
