import {UserActions} from './../redux/userSlice';
import {ApiResponse} from 'apisauce';
import {put, call} from 'redux-saga/effects';
import {APIErr} from '../types/errorDTO';
import userApi from '../api/users';
import {PayloadAction} from '@reduxjs/toolkit';
import {SagaIterator} from 'redux-saga';
import {UserDTO} from '../types/userTypes';

export function* updateName({
  payload: {name, token},
}: PayloadAction<{name: string; token: string}>): SagaIterator {
  yield put(UserActions.user_request());
  const response: ApiResponse<UserDTO, APIErr> = yield call(
    userApi.editName,
    name,
    token,
  );
  if (response.ok && !!response.data) {
    const userDetails = response.data;
    yield put(UserActions.user_fulfilled(userDetails));
  } else {
    const status = response.data as APIErr;
    yield put(UserActions.user_failed(status));
  }
}
