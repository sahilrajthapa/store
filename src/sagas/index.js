import {all, fork} from 'redux-saga/effects';
import loginWatcher from './login';
import homeWatcher from './home';
import categoriesWatcher from './categories';
import productsWatcher from './products';
import profileWatcher from './profile';
import orderWatcher from './order';

export function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(homeWatcher),
    fork(categoriesWatcher),
    fork(productsWatcher),
    fork(profileWatcher),
    fork(orderWatcher),
  ]);
}
