import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/products';
import {getProducts} from '../services/products';
import NavigationService from '../navigations/NavigationService';

function* getProductsRequest(action) {
  const {params} = action;
  const response = yield call(getProducts, params);

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

  const params = {search: searchText};
  const response = yield call(getProducts, params);

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
