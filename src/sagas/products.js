import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/products';
import {getApi} from '../utils/apiHelper';

function* getProductsRequest(action) {
  const response = yield call(getApi, '/products/');

  if (response.status === 200) {
    yield put({type: types.GET_PRODUCTS_SUCCESS, payload: response.data});
  } else {
    yield put({type: types.GET_PRODUCTS_FAILURE});
  }
}

function* productsWatcher() {
  yield takeLatest(types.GET_PRODUCTS_REQUEST, getProductsRequest);
}

export default productsWatcher;
