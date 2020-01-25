import {all, fork} from 'redux-saga/effects';
import loginWatcher from './login';

export function* rootSaga() {
  yield all([fork(loginWatcher)]);
}
