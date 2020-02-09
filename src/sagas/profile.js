import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/profile';
import {getApi} from '../utils/apiHelper';

function* getProfileRequest(action) {
  const response = yield call(getApi, '/profile/');

  if (response.status === 200) {
    yield put({type: types.GET_PROFILE_SUCCESS, payload: response.data});
  } else {
    yield put({type: types.GET_PROFILE_FAILURE});
  }
}

function* profileWatcher() {
  yield takeLatest(types.GET_PROFILE_REQUEST, getProfileRequest);
}

export default profileWatcher;
