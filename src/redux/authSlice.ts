import {UserDTO} from './../types/userTypes';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AuthState {
  userLoggedIn: boolean;
  token: string;
  operationState: 'idle' | 'pending' | 'failed' | 'fulfilled';
}

const initialState: AuthState = {
  userLoggedIn: false,
  token: '',
  operationState: 'idle',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, {payload}: PayloadAction<UserDTO>) => {
      state.userLoggedIn = true;
      state.token = payload.token;
    },
    signUp: (state, {payload}: PayloadAction<UserDTO>) => {
      state.userLoggedIn = true;
      state.token = payload.token;
    },
    logout: state => {
      state.userLoggedIn = false;
    },
    setStatus: (
      state,
      {payload}: PayloadAction<'idle' | 'pending' | 'failed' | 'fulfilled'>,
    ) => {
      state.operationState = payload;
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
