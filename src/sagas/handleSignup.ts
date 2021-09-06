import {ApiResponse} from 'apisauce';
import {put, call} from 'redux-saga/effects';
import {APIErr} from '../types/errorDTO';
import {UserDTO, UserSignUpDTO} from '../types/userTypes';
import userApi from '../api/users';
import {PayloadAction} from '@reduxjs/toolkit';
import {SagaIterator} from 'redux-saga';
import {AuthActions} from '../redux/authSlice';

export function* handleSignup({
  payload: {email, password, name},
}: PayloadAction<UserSignUpDTO>): SagaIterator {
  yield put(AuthActions.auth_request());
  const response: ApiResponse<UserDTO, APIErr> = yield call(
    userApi.signUp,
    name,
    email,
    password,
  );
  if (response.ok && !!response.data) {
    const userDetails = response.data;
    yield put(AuthActions.auth_fulfilled(userDetails));
  } else {
    const status = response.data as APIErr;
    yield put(AuthActions.auth_failed(status));
  }
}
