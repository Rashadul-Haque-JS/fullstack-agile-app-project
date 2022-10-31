import { TicketModel, ITickets } from '../../models';

export const addTickets = async (ticket: ITickets) => {
  const newTicket = new TicketModel(ticket);
  await newTicket.save();
  return newTicket;
};
