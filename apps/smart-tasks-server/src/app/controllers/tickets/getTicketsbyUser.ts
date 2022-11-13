import { TicketModel } from '@repo-hubs/smart-tasks-lib';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export const ticketsByUser = async (req: Request, res: Response) => {
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
      const tickets = await TicketModel.find({
        assigneesId: verify._id,
      }).exec();
      if (tickets.length > 0) {
        res.json({ tickets });
      } else {
        res.json({tickets:[]})
      }
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
