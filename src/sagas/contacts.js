import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/contacts';
import {getContacts} from '../services/contacts';

function* getContactsRequest() {
  try {
    const response = yield call(getContacts);
    yield put({type: types.GET_CONTACTS_SUCCESS, payload: response.data});
  } catch (err) {
    yield put({type: types.GET_CONTACTS_FAILURE});
  }
}

function* contactsWatcher() {
  yield takeLatest(types.GET_CONTACTS_REQUEST, getContactsRequest);
}

export default contactsWatcher;
