import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/profile';
import {getProfile} from '../services/profile';

function* getProfileRequest() {
  try {
    const response = yield call(getProfile);
    yield put({type: types.GET_PROFILE_SUCCESS, payload: response.data});
  } catch (err) {
    yield put({type: types.GET_PROFILE_FAILURE});
  }
}

function* profileWatcher() {
  yield takeLatest(types.GET_PROFILE_REQUEST, getProfileRequest);
}

export default profileWatcher;
