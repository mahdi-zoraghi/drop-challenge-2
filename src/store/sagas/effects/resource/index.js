import { takeEvery } from "redux-saga/effects"

import fetchResourceSaga from "./fetchResource"

import { fetchResource } from "../../../actions"

function* usersSagas() {
  yield takeEvery(fetchResource.type, fetchResourceSaga)
}

export default usersSagas
