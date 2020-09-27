import {takeLatest, call, put} from 'redux-saga/effects';
import {ToastAndroid} from 'react-native';
import * as types from '../actions/notifications';
import {
  getInformation,
  postNotificationMessage,
} from '../services/notifications';

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

function* postNotificationMessageRequest(action) {
  try {
    const {payload} = action;
    yield call(postNotificationMessage, payload);
    yield put({type: types.POST_NOTIFICATION_MESSAGE_SUCCESS});
    yield put({type: types.RESET_FORM});
    ToastAndroid.show('Message was send successfully!', ToastAndroid.SHORT);
  } catch (err) {
    yield put({type: types.POST_NOTIFICATION_MESSAGE_FAILURE});
  }
}

function* notificationsWatcher() {
  yield takeLatest(types.GET_INFORMATION_REQUEST, getInformationRequest);
  yield takeLatest(types.GET_NOTIFICATIONS_REQUEST, getNotificationsRequest);
  yield takeLatest(
    types.POST_NOTIFICATION_MESSAGE_REQUEST,
    postNotificationMessageRequest,
  );
}

export default notificationsWatcher;
