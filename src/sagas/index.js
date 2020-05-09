import { takeEvery } from "redux-saga/effects";

function* workersaga() {
  yield console.log("WORLD");
}

export default function* rootSaga() {
  yield takeEvery("Hello", workersaga);
}
