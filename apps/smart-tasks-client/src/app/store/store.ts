import { configureStore } from '@reduxjs/toolkit';
import businessSlice from '../features/business/businessAuthSlicer';
import userSlicer from '../features/user/userAuthSlicer';
import ticketsSlicer from '../features/tickets/ticketsSlicer';

export const store = configureStore({
  reducer: {
    business: businessSlice,
    user:userSlicer,
    tickets:ticketsSlicer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch