import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface userState {
  currentUser: any;
  businessName: string;
  photo: string;
  isULoged: boolean;
}

const initialState: userState = {
  currentUser: {},
  businessName:'',
  photo: '',
  isULoged: false,
};

export const userAuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addCrntUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    addBname: (state, { payload }) => {
      state.businessName = payload;
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

export const { addCrntUser,addBname, logOutUser, loginUser } = userAuthSlice.actions;

export default userAuthSlice.reducer;
