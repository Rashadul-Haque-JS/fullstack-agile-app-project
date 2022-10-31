import { Router } from 'express';
const router = Router();

import { createUser } from '../controllers/auth/users/register';


router.post('/users', createUser)


export default router;
