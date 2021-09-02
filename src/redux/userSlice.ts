import {AuthActions} from './authSlice';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
  name: string | undefined;
  email: string | undefined;
}

const initialState: UserState = {
  name: undefined,
  email: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
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
  },
  extraReducers: builder => {
    builder.addCase(AuthActions.logout, () => initialState);
  },
});

// Action creators are generated for each case reducer function
export const {setUserName, setUserEmail} = userSlice.actions;
export default userSlice.reducer;
