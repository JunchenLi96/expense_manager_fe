import {APIErr} from './../types/errorDTO';
import {UserDTO, OperationStatus, UserLoginDTO} from './../types/userTypes';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AuthState {
  userLoggedIn: boolean;
  token: string;
  operationStatus: OperationStatus;
  errorMessage: string;
}

const initialState: AuthState = {
  userLoggedIn: false,
  token: '',
  operationStatus: OperationStatus.Idle,
  errorMessage: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (_state, {payload: _}: PayloadAction<UserLoginDTO>) => undefined,
    //study how to use lowdash

    signUp: (state, {payload}: PayloadAction<UserDTO>) => {
      state.userLoggedIn = true;
      state.token = payload.token;
    },

    logout: () => initialState,

    login_request: state => {
      state.operationStatus = OperationStatus.Pending;
      state.errorMessage = '';
    },
    login_failed: (state, {payload}: PayloadAction<APIErr>) => {
      state.operationStatus = OperationStatus.Failed;
      state.errorMessage = payload;
    },
    login_fulfilled: (state, {payload}: PayloadAction<UserDTO>) => {
      state.operationStatus = OperationStatus.Fulfilled;
      state.userLoggedIn = true;
      state.token = payload.token;
      state.errorMessage = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const AuthActions = authSlice.actions;
//read about destructuring
export default authSlice.reducer;
// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
//RUSH using another tool for redux toolkit and have to write it immutable
//Reducers have to be Pure (pure function (no side effect))
