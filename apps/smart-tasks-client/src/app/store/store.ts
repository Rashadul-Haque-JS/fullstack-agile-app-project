import { configureStore } from '@reduxjs/toolkit';
import businessSlice from '../features/business/businessSlicer';
import userSlicer from '../features/user/userSlicer';
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