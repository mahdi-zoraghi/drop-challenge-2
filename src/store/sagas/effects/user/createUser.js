import { put, call } from "redux-saga/effects"

import { createUser as createUserApi } from "../../../../api"

import {
  requested,
  failedRequest,
  successRequest,
} from "../../../reducer/mainSlice/mainSlice"

function* createUser(action) {
  try {
    yield put(requested())
    const response = yield call(createUserApi, action.payload)
    console.log("user created: ", response.data)
    yield put(successRequest())
  } catch {
    yield put(failedRequest())
  }
}

export default createUser
