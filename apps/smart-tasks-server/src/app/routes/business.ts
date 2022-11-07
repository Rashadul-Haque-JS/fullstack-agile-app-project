import { Router } from 'express';
const router = Router();

import { createBusiness } from '../controllers/auth/business/register';
import { businessLogin } from '../controllers/auth/business/login';
import {allBusiness } from '../controllers/business/business';

router.post('/business', createBusiness);
router.post('/business/login', businessLogin);
router.get('/business', allBusiness);

export default router;
