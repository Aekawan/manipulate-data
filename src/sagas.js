import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchUsers() {
  return axios.get("https://uinames.com/api/?ext&amount=25");
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchUsers);
    const users = response.data;

    // dispatch a success action to the store with the new users
    yield put({ type: "API_CALL_SUCCESS", users });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}