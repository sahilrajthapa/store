import {takeLatest, call, put, fork} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import * as types from '../actions/login';
import {postApi} from '../utils/apiHelper';
import NavigationService from '../navigations/NavigationService';

function* loginRequest(action) {
  const {payload} = action;

  const response = yield call(postApi, '/api-auth/', payload);

  if (response && response.status === 200) {
    yield AsyncStorage.setItem('token', response.data.token);

    yield NavigationService.navigate('Home');

    yield put({type: types.LOGIN_SUCCESS});
  } else {
    yield put({type: types.LOGIN_FAILURE});
  }
}

function* loginWatcher() {
  yield takeLatest(types.LOGIN_REQUEST, loginRequest);
}

export default loginWatcher;
