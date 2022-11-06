import { configureStore } from '@reduxjs/toolkit';
import businessAuthSlice from './features/business/businessAuthSlicer';
export const store = configureStore({
  reducer: {
    businessAuth: businessAuthSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch