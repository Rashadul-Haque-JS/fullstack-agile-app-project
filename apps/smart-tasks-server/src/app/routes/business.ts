import { Router } from 'express';
const router = Router();

import { createBusiness } from '../controllers/auth/business/register';
import { businessLogin } from '../controllers/auth/business/login';
import {allBusiness } from '../controllers/business/business';
import {businessLogout} from '../controllers/auth/business/logout'
import {businessById} from '../controllers/business/businessById' 



router.post('/business', createBusiness);
router.post('/business/login', businessLogin);
router.get('/business', allBusiness);
router.get('/business/logout', businessLogout);
router.get('/business/:businessId', businessById);


export default router;
