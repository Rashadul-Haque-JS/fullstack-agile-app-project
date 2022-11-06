import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface busnessState {
  currentBusiness: any;
  photo: string;
}

const initialState: busnessState = {
  currentBusiness: null,
  photo: '',
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

    getPhoto: (state, { payload }) => {
      state.photo = payload;
    },
  },
});

export const { addCrntBusiness, logOutBusiness } = businessAuthSlice.actions;

export default businessAuthSlice.reducer;
