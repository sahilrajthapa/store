import {takeLatest, call, put, fork} from 'redux-saga/effects';
import * as types from '../actions/categories';
import {getCategories} from '../services/categories';

function* getCategoriesRequest() {
  try {
    const response = yield call(getCategories);
    yield put({type: types.GET_CATEGORIES_SUCCESS, payload: response.data});
  } catch (err) {
    yield put({type: types.GET_CATEGORIES_FAILURE});
  }
}

function* categoriesWatcher() {
  yield takeLatest(types.GET_CATEGORIES_REQUEST, getCategoriesRequest);
}

export default categoriesWatcher;
