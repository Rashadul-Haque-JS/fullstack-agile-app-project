import { addUser, BusinessModel } from '@repo-hubs/smart-tasks-lib';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  interface UserPayload {
    id: string;
  }

  try {
    const authHeader = req.headers['authorization'];
    const bearerToken = authHeader && authHeader.split(' ')[1];

    const verify = jwt.verify(bearerToken, process.env.JWT_SECRET) as UserPayload;

    if (!verify) {
      res.status(401).json({ message: 'Unauthorized' });
    }

    const business = await BusinessModel.findById({ _id: verify.id });

    const userData = req.body;
    userData['businessId'] = business._id;
    
    const user = await addUser(userData);

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 1000 * 60 * 60 * 24,
    });

    res.json({ message: 'user is created succesfully', success: true, user, token });
  } catch (error) {
    next(error);
  }
};
