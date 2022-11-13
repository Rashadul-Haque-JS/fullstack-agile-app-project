import { configureStore } from '@reduxjs/toolkit';
import businessSlice from '../features/business/businessAuthSlicer';
import userAuthSlicer from '../features/user/userAuthSlicer';
import ticketsSlicer from '../features/tickets/ticketsSlicer';

export const store = configureStore({
  reducer: {
    business: businessSlice,
    user:userAuthSlicer,
    tickets:ticketsSlicer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch