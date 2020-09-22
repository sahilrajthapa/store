import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/notifications';
import {getInformation} from '../services/notifications';

function* getInformationRequest(action) {
  try {
    const {params} = action;
    const {data} = yield call(getInformation, params);
    let payload = {data};
    if (params.selected === 1) payload['sliderInformation'] = true;
    yield put({type: types.GET_INFORMATION_SUCCESS, payload});
  } catch (err) {
    yield put({type: types.GET_INFORMATION_FAILURE});
  }
}

function* getNotificationsRequest(action) {
  try {
    const {params} = action;
    const {data} = yield call(getInformation, params);
    yield put({type: types.GET_NOTIFICATIONS_SUCCESS, payload: data});
  } catch (err) {
    yield put({type: types.GET_NOTIFICATIONS_FAILURE});
  }
}

function* notificationsWatcher() {
  yield takeLatest(types.GET_INFORMATION_REQUEST, getInformationRequest);
  yield takeLatest(types.GET_NOTIFICATIONS_REQUEST, getNotificationsRequest);
}

export default notificationsWatcher;
