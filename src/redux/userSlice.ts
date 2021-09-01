import {createSlice} from '@reduxjs/toolkit';

export interface UserState {
  userLoggedIn: boolean;
}

const initialState: UserState = {
  userLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userLoggedIn = true;
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
export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
