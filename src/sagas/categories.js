import {takeLatest, call, put, fork} from 'redux-saga/effects';
import * as types from '../actions/categories';
import {getApi} from '../utils/apiHelper';

function* getCategoriesRequest(action) {
  const response = yield call(getApi, '/categories/');

  if (response.status === 200) {
    yield put({type: types.GET_CATEGORIES_SUCCESS, payload: response.data});
  } else {
    yield put({type: types.GET_CATEGORIES_FAILURE});
  }
}

function* categoriesWatcher() {
  yield takeLatest(types.GET_CATEGORIES_REQUEST, getCategoriesRequest);
}

export default categoriesWatcher;
