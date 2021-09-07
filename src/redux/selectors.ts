import {RootState} from './store';

export const getUserName = (state: RootState) => state.user.name;
export const getUserEmail = (state: RootState) => state.user.email;

export const getOperationStatus = (state: RootState) =>
  state.user.operationStatus;

export const getErrorMessage = (state: RootState) => state.user.errorMessage;

export const getLoginStatus = (state: RootState) => state.auth.userLoggedIn;

export const getToken = (state: RootState) => state.auth.token;

export const getAuthStatus = (state: RootState) => state.auth.operationStatus;

export const getAuthErrorMessage = (state: RootState) =>
  state.auth.errorMessage;
