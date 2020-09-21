import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/home';
import {getDashboardData} from '../services/home';
import {getInformation} from '../services/information';

function* getDashboardDataRequest(action) {
  try {
    console.log('before');
    const response = yield call(getDashboardData);
    console.log('rspnse', response);
    yield put({type: types.GET_DASHBOARD_DATA_SUCCESS, payload: response.data});
  } catch (err) {
    console.log('Err'.err);
    yield put({type: types.GET_DASHBOARD_DATA_FAILURE});
  }
}

function* getInformationRequest(action) {
  try {
    const {params} = action;
    const response = yield call(getInformation, params);

    yield put({type: types.GET_INFORMATION_SUCCESS, payload: response.data});
  } catch (err) {
    yield put({type: types.GET_INFORMATION_FAILURE});
  }
}

function* homeWatcher() {
  yield takeLatest(types.GET_DASHBOARD_DATA_REQUEST, getDashboardDataRequest);
  yield takeLatest(types.GET_INFORMATION_REQUEST, getInformationRequest);
}

export default homeWatcher;
