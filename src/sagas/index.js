import {all, fork} from 'redux-saga/effects';
import loginWatcher from './login';
import homeWatcher from './home';
export function* rootSaga() {
  yield all([fork(loginWatcher), fork(homeWatcher)]);
}
