import {OperationStatus, UserDTO} from './../types/userTypes';
import {AuthActions} from './authSlice';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {APIErr} from '../types/errorDTO';

export interface UserState {
  name: string | undefined;
  email: string | undefined;
  operationStatus: OperationStatus;
  errorMessage: string;
}

const initialState: UserState = {
  name: undefined,
  email: undefined,
  operationStatus: OperationStatus.Idle,
  errorMessage: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName: (_state, {payload: _}: PayloadAction<{name: string}>) =>
      undefined,
    setUserName: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload !== undefined) {
        state.name = action.payload;
      }
    },
    setUserEmail: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload !== undefined) {
        state.email = action.payload;
      }
    },
    userSetIdle: state => {
      state.operationStatus = OperationStatus.Idle;
      state.errorMessage = '';
    },
    user_request: state => {
      state.operationStatus = OperationStatus.Pending;
      state.errorMessage = '';
    },
    user_failed: (state, {payload}: PayloadAction<APIErr>) => {
      state.operationStatus = OperationStatus.Failed;
      state.errorMessage = payload;
    },
    user_fulfilled: (state, {payload: _}: PayloadAction<UserDTO>) => {
      state.operationStatus = OperationStatus.Fulfilled;
      state.errorMessage = '';
      state.name = _.name;
    },
  },
  extraReducers: builder => {
    builder.addCase(AuthActions.logout, () => initialState);
    builder.addCase(
      AuthActions.auth_fulfilled,
      (state, {payload: {name, email}}: PayloadAction<UserDTO>) => {
        state.name = name;
        state.email = email;
      },
    );
  },
});

// Action creators are generated for each case reducer function
export const UserActions = userSlice.actions;
export default userSlice.reducer;
