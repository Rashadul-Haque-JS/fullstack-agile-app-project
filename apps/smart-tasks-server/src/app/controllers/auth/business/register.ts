import { addBusiness } from '@repo-hubs/smart-tasks-lib';
import { Request, Response, NextFunction } from 'express';

import * as jwt from 'jsonwebtoken';

export const createBusiness = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const business = await addBusiness(req.body);
    await business.save();

    const token = jwt.sign({ _id: business._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({
      message: 'Welcome to Smart Tasks',
      success: true,
      business,
      token,
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
