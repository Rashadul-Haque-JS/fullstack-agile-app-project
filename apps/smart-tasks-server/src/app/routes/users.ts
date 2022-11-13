import { Router } from 'express';
const router = Router();

import { createUser } from '../controllers/auth/users/register';
import { userLogin } from '../controllers/auth/users/login';
import {userLogout} from '../controllers/auth/users/logout';
import {userById} from '../controllers/users/userById'

router.post('/users', createUser);
router.post('/users/login', userLogin);
router.get('/users/logout', userLogout)
router.get('/users/:userId', userById);

export default router;
