import {takeLatest, all} from 'redux-saga/effects';
import {AuthActions} from '../redux/authSlice';
import {handleLogin} from './handleLogin';
import {handleSignup} from './handleSignup';

export default function* authSagas() {
  yield all([takeLatest(AuthActions.login.type, handleLogin)]);
  yield all([takeLatest(AuthActions.signUp.type, handleSignup)]);
}
