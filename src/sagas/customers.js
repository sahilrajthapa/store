import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/customers';
import {getCustomers} from '../services/customers';

function* getCustomersRequest() {
  try {
    const response = yield call(getCustomers);
    yield put({type: types.GET_CUSTOMERS_SUCCESS, payload: response.data});
  } catch (err) {
    yield put({type: types.GET_CUSTOMERS_FAILURE});
  }
}

function* customersWatcher() {
  yield takeLatest(types.GET_CUSTOMERS_REQUEST, getCustomersRequest);
}

export default customersWatcher;
