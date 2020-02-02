import {all, fork} from 'redux-saga/effects';
import loginWatcher from './login';
import homeWatcher from './home';
import categoriesWatcher from './categories';
import productsWatcher from './products';

export function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(homeWatcher),
    fork(categoriesWatcher),
    fork(productsWatcher),
  ]);
}
