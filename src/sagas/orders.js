import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/orders';
import {CLEAR_CART} from '../actions/cart';
import NavigationService from '../navigations/NavigationService';
import {getOrder, postOrder} from '../services/orders';

function* postOrderRequest(action) {
  try {
    const {payload} = action;
    yield call(postOrder, payload);
    yield NavigationService.navigate('Confirmation');
    yield put({type: types.POST_ORDER_SUCCESS});
    yield put({type: CLEAR_CART});
  } catch (err) {
    yield put({type: types.POST_ORDER_FAILURE});
  }
}

function* getOrderRequest() {
  try {
    const response = yield call(getOrder);
    yield put({type: types.GET_ORDER_SUCCESS, payload: response.data});
  } catch (err) {
    yield put({type: types.GET_ORDER_FAILURE});
  }
}

function* orderWatcher() {
  yield takeLatest(types.POST_ORDER_REQUEST, postOrderRequest);
  yield takeLatest(types.GET_ORDER_REQUEST, getOrderRequest);
}

export default orderWatcher;
