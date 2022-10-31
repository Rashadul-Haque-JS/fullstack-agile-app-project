import { addBusiness} from '@repo-hubs/smart-tasks-lib';
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

    const token = jwt.sign({ id: business._id }, process.env.JWT_SECRET, {
      expiresIn: 1000 * 60 * 60 * 24,
    });

    res.json({
      message: 'Welcome to Smart Tasks',
      success: true,
      business,
      token,
    });
  } catch (error) {
    next(error);
  }
};
