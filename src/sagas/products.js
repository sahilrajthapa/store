import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/products';
import {getApi} from '../utils/apiHelper';
import NavigationService from '../navigations/NavigationService';

function* getProductsRequest(action) {
  const response = yield call(getApi, '/products/');

  if (response.status === 200) {
    yield put({type: types.GET_PRODUCTS_SUCCESS, payload: response.data});
  } else {
    yield put({type: types.GET_PRODUCTS_FAILURE});
  }
}

function* searchProductRequest(action) {
  const {
    payload: {searchText},
  } = action;

  const response = yield call(getApi, `/products/?search=${searchText}`);

  if (response.status === 200) {
    yield NavigationService.navigate('SearchResult');
    yield put({type: types.SEARCH_PRODUCT_SUCCESS, payload: response.data});
  } else {
    yield put({type: types.SEARCH_PRODUCT_FAILURE});
  }
}

function* productsWatcher() {
  yield takeLatest(types.GET_PRODUCTS_REQUEST, getProductsRequest);
  yield takeLatest(types.SEARCH_PRODUCT_REQUEST, searchProductRequest);
}

export default productsWatcher;
