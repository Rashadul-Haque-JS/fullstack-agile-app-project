import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ticketsState {
  tickets: [];
}

const initialState: ticketsState = {
  tickets: [],
};

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    getTickets: (state, { payload }) => {
      state.tickets = payload;
    },
    removeTickets: (state) => {
      state.tickets = [];
    },
  },
});

export const { getTickets,removeTickets } = ticketsSlice.actions;

export default ticketsSlice.reducer;
