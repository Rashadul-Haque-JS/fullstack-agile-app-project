import { addUser, BusinessModel } from '@repo-hubs/smart-tasks-lib';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { configData } from '@repo-hubs/smart-tasks-lib';

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    const verify = jwt.verify(token, configData.jwt_secret);

    if (!verify) {
      res.status(401).json({ message: 'Unauthorized' });
    }

    // const businessId = await BusinessModel.findById({ _id: verify.id }).select(
    //   '_id'
    // );

    const user = await addUser(req.body);
    res.json({ message: 'user is created succesfully', success: true, user });
  } catch (error) {
    next(error);
  }
};
