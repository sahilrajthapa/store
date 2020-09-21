import {takeLatest, call, put} from 'redux-saga/effects';
import * as types from '../actions/information';
import {getInformation} from '../services/information';

function* getInformationRequest(action) {
  const {params} = action;
  const response = yield call(getInformation, params);

  if (response.status === 200) {
    yield put({type: types.GET_INFORMATION_SUCCESS, payload: response.data});
  } else {
    yield put({type: types.GET_INFORMATION_FAILURE});
  }
}

function* informationWatcher() {
  yield takeLatest(types.GET_INFORMATION_REQUEST, getInformationRequest);
}

export default informationWatcher;
