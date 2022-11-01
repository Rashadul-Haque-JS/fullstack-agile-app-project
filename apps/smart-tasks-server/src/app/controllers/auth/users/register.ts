import { addUser, BusinessModel } from '@repo-hubs/smart-tasks-lib';
import { Console } from 'console';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  interface UserPayload {
    _id: string;
  }

  try {
    const authHeader = req.headers['authorization'];
    const bearerToken = authHeader && authHeader.split(' ')[1];

    const verify = jwt.verify(
      bearerToken,
      process.env.JWT_SECRET
    ) as UserPayload;

    console.log(verify);
    if (!verify) {
      res.status(401).json({ message: 'Unauthorized' });
    }

    const business = await BusinessModel.findOne({ _id: verify._id }).exec();

    if (!business) {
      res.status(401).json({ message: 'Unauthorized' });
    } else {
      const userData = req.body;
      userData.businessId = business._id;

      await addUser(userData);

      res.json({
        message: 'user is created succesfully',
        success: true,
      });
    }
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({
        error_message: error.message,
        success: false,
        error_code: error.code,
      });
    } else if (error.code === undefined) {
      res.status(400).json({
        error_message: error.message,
        success: false,
        error_code: error.code,
      });
    } else {
      res.status(error.code).json({
        error_message: error.message,
        success: false,
        error_code: error.code,
      });
    }
  }
};
