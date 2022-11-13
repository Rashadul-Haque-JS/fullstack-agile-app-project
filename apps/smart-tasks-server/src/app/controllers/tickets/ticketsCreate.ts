import {
  addTickets,
  BusinessModel,
  UserModel,
} from '@repo-hubs/smart-tasks-lib';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export const createTicket = async (req: Request, res: Response) => {
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

    if (!verify) {
      throw new Error('Unauthorized access');
    }

    const business = await BusinessModel.findOne({ _id: verify._id });

    if (!business) {
      throw new Error('Creating Ticket is only allowed for business authority');
    }

    const user = await UserModel.findById({ _id: req.body.assigneesId });

    if (!user) {
      throw new Error('Assignee is not founnd');
    }

    console.log(business);

    const ticketsData = req.body;
    ticketsData.created_by = business.admin;
    ticketsData.businessId = business._id;
    ticketsData.assigneesName = user.name;

    // Create ticket
    await addTickets(ticketsData);

    res.json({
      message: 'Ticket is created succesfully',
      success: true,
    });
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
