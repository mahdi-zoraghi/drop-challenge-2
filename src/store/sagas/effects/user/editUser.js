import { put, call } from "redux-saga/effects"

import { editUser as editUserApi } from "../../../../api"

import { editUser as editUserAc } from "../../../reducer/usersSlice/usersSlice"

import {
  requested,
  failedRequest,
  successRequest,
} from "../../../reducer/mainSlice/mainSlice"

function* editUser(action) {
  try {
    yield put(requested())
    const response = yield call(editUserApi, action.payload)
    console.log("user edited: ", response.data)
    console.log("new user after edit: ", action.payload)
    yield put(editUserAc(action.payload))
    yield put(successRequest())
  } catch {
    yield put(failedRequest())
  }
}

export default editUser
