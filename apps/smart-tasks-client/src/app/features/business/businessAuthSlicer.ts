import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface busnessState {
    currentBusiness: any,
    photo: string,
    token: string
  }

const initialState :busnessState = {
  currentBusiness: null,
  photo: '',
  token: '',
};

export const businessAuthSlice = createSlice({
  name: 'business-auth',
  initialState,
  reducers: {
    addCrntBusiness: (state, { payload }) => {
      state.currentBusiness = payload;
    },
    logOutBusiness: (state) => {
      state.currentBusiness = null;
    },
    addBToken: (state, { payload }) => {
      state.token = payload;
    },
    removeBToken: (state) => {
      state.token = '';
    },
    getPhoto: (state, { payload }) => {
      state.photo = payload;
    },
  },
});

export const { addCrntBusiness, logOutBusiness, addBToken, removeBToken } =
  businessAuthSlice.actions;

export default businessAuthSlice.reducer;
