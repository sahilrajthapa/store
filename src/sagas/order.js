import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/order';
import {getApi, postApi} from '../utils/apiHelper';
import NavigationService from '../navigations/NavigationService';

function* postOrderRequest(action) {
  const {payload} = action;
  const response = yield call(postApi, '/order/', payload);

  if (response.status === 201) {
    yield NavigationService.navigate('Confirmation');
    yield put({type: types.POST_ORDER_SUCCESS});
  } else {
    yield put({type: types.POST_ORDER_FAILURE});
  }
}

function* orderWatcher() {
  yield takeLatest(types.POST_ORDER_REQUEST, postOrderRequest);
}

export default orderWatcher;
