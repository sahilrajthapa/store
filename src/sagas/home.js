import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/home';
import {getDashboardData} from '../services/home';

function* getDashboardDataRequest() {
  try {
    const response = yield call(getDashboardData);
    yield put({type: types.GET_DASHBOARD_DATA_SUCCESS, payload: response.data});
  } catch (err) {
    yield put({type: types.GET_DASHBOARD_DATA_FAILURE});
  }
}

function* homeWatcher() {
  yield takeLatest(types.GET_DASHBOARD_DATA_REQUEST, getDashboardDataRequest);
}

export default homeWatcher;
