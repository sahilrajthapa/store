import {takeLatest, call, put, fork} from 'redux-saga/effects';
import * as types from '../actions/login';
import {postApi} from '../utils/apiHelper';
import NavigationService from '../navigations/NavigationService';

function* loginRequest(action) {
  const {payload} = action;

  const response = yield call(postApi, '/api-auth/', payload);

  if (response.status === 200) {
    yield put({type: types.LOGIN_SUCCESS, payload});
    NavigationService.navigate('Home');
  } else {
    yield put({type: types.LOGIN_FAILURE, payload});
  }
}

function* loginWatcher() {
  yield takeLatest(types.LOGIN_REQUEST, loginRequest);
}

export default loginWatcher;
