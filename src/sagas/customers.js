import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/customers';
import {getApi} from '../utils/apiHelper';

function* getCustomersRequest(action) {
  const response = yield call(getApi, '/customers/');

  if (response.status === 200) {
    yield put({type: types.GET_CUSTOMERS_SUCCESS, payload: response.data});
  } else {
    yield put({type: types.GET_CUSTOMERS_FAILURE});
  }
}

function* customersWatcher() {
  yield takeLatest(types.GET_CUSTOMERS_REQUEST, getCustomersRequest);
}

export default customersWatcher;
