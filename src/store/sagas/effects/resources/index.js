import { takeEvery } from "redux-saga/effects"

import fetchResourcesSaga from "./fetchResources"

import { fetchResources } from "../../../actions"

function* resourcesSagas() {
  yield takeEvery(fetchResources.type, fetchResourcesSaga)
}

export default resourcesSagas
