import { Router } from 'express';
const router = Router();

import { createBusiness } from '../controllers/auth/business/register';


router.post('/business', createBusiness)


export default router;












