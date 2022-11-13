import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface userState {
  currentUser: any;
  photo: string;
  isULoged: boolean;
}

const initialState: userState = {
  currentUser: {},
  photo: '',
  isULoged: false,
};

export const userAuthSlice = createSlice({
  name: 'user-auth',
  initialState,
  reducers: {
    addCrntUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    loginUser: (state) => {
      state.isULoged = true;
    },
    logOutUser: (state) => {
      state.currentUser = {};
      state.isULoged = false;
    },

    getPhoto: (state, { payload }) => {
      state.photo = payload;
    },
  },
});

export const { addCrntUser, logOutUser, loginUser } = userAuthSlice.actions;

export default userAuthSlice.reducer;
