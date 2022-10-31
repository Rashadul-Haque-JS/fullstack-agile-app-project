import { Router } from 'express';
const router = Router();

import { createUser } from '../controllers/auth/users/register';
import { userLogin } from '../controllers/auth/users/login';

router.post('/users', createUser);
router.post('/users/login', userLogin);

export default router;
