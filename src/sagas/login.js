import {takeLatest, call, put, fork} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import * as types from '../actions/login';
import {postAuth} from '../services/login';
import NavigationService from '../navigations/NavigationService';

function* loginRequest(action) {
  try {
    const {payload} = action;
    console.log('postAuth', payload);
    const response = yield call(postAuth, payload);
    yield AsyncStorage.setItem('token', response.data.token);

    yield NavigationService.navigate('Home');

    yield put({type: types.LOGIN_SUCCESS, payload: response.data});
  } catch (err) {
    yield put({type: types.LOGIN_FAILURE});
  }
}

function* loginWatcher() {
  yield takeLatest(types.LOGIN_REQUEST, loginRequest);
}

export default loginWatcher;
