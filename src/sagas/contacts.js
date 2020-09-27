import {takeLatest, call, put} from 'redux-saga/effects';
import {ToastAndroid} from 'react-native';
import * as types from '../actions/contacts';
import {getContacts, postMessage} from '../services/contacts';

function* getContactsRequest() {
  try {
    const response = yield call(getContacts);
    yield put({type: types.GET_CONTACTS_SUCCESS, payload: response.data});
  } catch (err) {
    yield put({type: types.GET_CONTACTS_FAILURE});
  }
}

function* postMessageRequest(action) {
  try {
    const {payload} = action;
    yield call(postMessage, payload);
    yield put({type: types.POST_MESSAGE_SUCCESS});
    yield put({type: types.RESET_FORM});
    ToastAndroid.show('Message was send successfully!', ToastAndroid.SHORT);
  } catch (err) {
    yield put({type: types.POST_MESSAGE_FAILURE});
  }
}

function* contactsWatcher() {
  yield takeLatest(types.GET_CONTACTS_REQUEST, getContactsRequest);
  yield takeLatest(types.POST_MESSAGE_REQUEST, postMessageRequest);
}

export default contactsWatcher;
