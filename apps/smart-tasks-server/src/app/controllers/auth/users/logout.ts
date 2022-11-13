import * as jwt from 'jsonwebtoken';

import { UAccessTokenModel } from '@repo-hubs/smart-tasks-lib';
import { Request, Response, NextFunction } from 'express';

export const userLogout = async (
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
    console.log('Bearer token ', bearerToken);
    if (bearerToken) {
      const verify = jwt.verify(
        bearerToken,
        process.env.JWT_SECRET
      ) as UserPayload;

      if (!verify) {
        res.status(401).json({ message: 'Unauthorized' });
      }

      const user = await UAccessTokenModel.findOne({
        userId: verify._id,
      });

      if (user && user.token === bearerToken) {
        // Update token field for the current user while logging out
        await user.remove({
          token: user.token,
        });

        res.json({ message: 'Logged out successfull!', success: true });
      } else {
        res.status(401).json({ message: 'Unauthorized' });
      }
    } else {
      res.status(400).json({ message: 'User not inlogged' });
    }
  } catch (error) {
    console.log(error);

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
