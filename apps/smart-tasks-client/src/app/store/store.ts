import { configureStore } from '@reduxjs/toolkit';
import businessSlice from '../features/business/businessAuthSlicer';
export const store = configureStore({
  reducer: {
    business: businessSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch