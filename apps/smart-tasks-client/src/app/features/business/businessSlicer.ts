import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface busnessState {
  currentBusiness: any;
  photo: string;
  isBLoged: boolean;
}

const initialState: busnessState = {
  currentBusiness: null,
  photo: '',
  isBLoged: false,
};

export const businessAuthSlice = createSlice({
  name: 'business-auth',
  initialState,
  reducers: {
    addCrntBusiness: (state, { payload }) => {
      state.currentBusiness = payload;
    },
    loginBusiness: (state) => {
      state.isBLoged = true;
    },
    logOutBusiness: (state) => {
      state.currentBusiness = null;
      state.isBLoged = false;
    },

    getPhoto: (state, { payload }) => {
      state.photo = payload;
    },
  },
});

export const { addCrntBusiness, logOutBusiness, loginBusiness } =
  businessAuthSlice.actions;

export default businessAuthSlice.reducer;
