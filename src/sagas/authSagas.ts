import {takeLatest, all} from 'redux-saga/effects';
import {AuthActions} from '../redux/authSlice';
import {handleLogin} from './handleLogin';

export default function* authSagas() {
  yield all([takeLatest(AuthActions.login.type, handleLogin)]);
}
