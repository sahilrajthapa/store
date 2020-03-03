import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/orders';
import {CLEAR_CART} from '../actions/cart';
import {getApi, postApi} from '../utils/apiHelper';
import NavigationService from '../navigations/NavigationService';

function* postOrderRequest(action) {
  const {payload} = action;
  const response = yield call(postApi, '/order/', payload);

  if (response.status === 201) {
    yield NavigationService.navigate('Confirmation');
    yield put({type: types.POST_ORDER_SUCCESS});
    yield put({type: CLEAR_CART});
  } else {
    yield put({type: types.POST_ORDER_FAILURE});
  }
}

function* getOrderRequest(action) {
  const response = yield call(getApi, '/order/');

  if (response.status === 200) {
    yield put({type: types.GET_ORDER_SUCCESS, payload: response.data});
  } else {
    yield put({type: types.GET_ORDER_FAILURE});
  }
}

function* orderWatcher() {
  yield takeLatest(types.POST_ORDER_REQUEST, postOrderRequest);
  yield takeLatest(types.GET_ORDER_REQUEST, getOrderRequest);
}

export default orderWatcher;
