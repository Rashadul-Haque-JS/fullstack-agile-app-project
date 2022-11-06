import * as jwt from 'jsonwebtoken';

import { BAccessTokenModel } from '@repo-hubs/smart-tasks-lib';
import { Request, Response, NextFunction } from 'express';

export const businessLogout = async (
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

      const admin = await BAccessTokenModel.findOne({
        businessId: verify._id,
      });

      if (admin && admin.token === bearerToken) {
        // Update token field for the current user while logging out
        await admin.remove({
          $where: function () {
            return this.token == '';
          },
        });

        await admin.update({ token: '', used_log: new Date() });

        // await admin.update({ token: null, last_used_at: moment().format("YYYY-MM-DD HH:mm:ss") })
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


