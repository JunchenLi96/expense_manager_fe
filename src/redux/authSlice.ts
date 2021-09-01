import {createSlice} from '@reduxjs/toolkit';

export interface AuthState {
  userLoggedIn: boolean;
}

const initialState: AuthState = {
  userLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userLoggedIn = true; //so is this mutating or not????
      //RUSH using another tool for redux toolkit and have to write it immutable
      //Reducers have to be Pure (pure function (no side effect))
    },
    logout: state => {
      state.userLoggedIn = false;
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
