import { addBusiness, BusinessModel } from '@repo-hubs/smart-tasks-lib';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { configData } from '@repo-hubs/smart-tasks-lib';

export const createBusiness = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const isBusiness = await BusinessModel.findOne({
      email: req.body.email,
    }).exec();

    if (!isBusiness) {
      const business = await addBusiness(req.body);
      await business.save();

      const token = jwt.sign({ id: business._id }, configData.jwt_secret, {
        expiresIn: process.env.JWT_EXPIRE,
      });

      res.json({
        message: 'Welcome to Smart Tasks',
        success: true,
        business,
        token,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    next(error);
  }
};
