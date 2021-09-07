import {all} from 'redux-saga/effects';
import authSagas from './authSagas';
import userSagas from './userSagas';

export function* rootSaga() {
  yield all([authSagas(), userSagas()]);
}
