import { Router } from 'express';
const router = Router();

import { createTicket } from '../controllers/tickets/ticketsCreate';

router.post('/tickets', createTicket);

export default router;
