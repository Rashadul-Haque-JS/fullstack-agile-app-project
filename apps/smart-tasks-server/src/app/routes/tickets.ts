import { Router } from 'express';
const router = Router();

import { createTicket } from '../controllers/tickets/ticketsCreate';
import { ticketsByBusiness } from '../controllers/tickets/getTicketsByBusiness';
import {ticketsByUser} from '../controllers/tickets/getTicketsByUser';

router.post('/tickets', createTicket);
router.get('/tickets/business', ticketsByBusiness);
router.get('/tickets/user', ticketsByUser)

export default router;
