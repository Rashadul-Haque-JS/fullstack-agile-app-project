import {BusinessModel } from '@repo-hubs/smart-tasks-lib';
import { Request, Response, NextFunction } from 'express';

export const allBusiness = async (req: Request, res: Response) => {
  try {
    const businesses = await BusinessModel.find({}).exec();
    res.json({ success: true, businesses });
  } catch (error) {
    if (error.code === undefined) {
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


