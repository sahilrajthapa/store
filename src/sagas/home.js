import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/home';
import {getApi} from '../utils/apiHelper';

function* getDashboardDataRequest(action) {
  const response = yield call(getApi, '/dashboard/');

  if (response.status === 200) {
    yield put({type: types.GET_DASHBOARD_DATA_SUCCESS, payload: response.data});
  } else {
    yield put({type: types.GET_DASHBOARD_DATA_FAILURE});
  }
}

function* homeWatcher() {
  yield takeLatest(types.GET_DASHBOARD_DATA_REQUEST, getDashboardDataRequest);
}

export default homeWatcher;
