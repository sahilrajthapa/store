import {takeLatest, call, put, fork} from 'redux-saga/effects';
import * as types from '../actions/login';

function* loginRequest(action) {
  const {payload} = action;

  console.log('action', action);
}

function* loginWatcher() {
  yield takeLatest(types.LOGIN_REQUEST, loginRequest);
}

export default loginWatcher;
