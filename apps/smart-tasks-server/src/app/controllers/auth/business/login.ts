import { BusinessModel } from '@repo-hubs/smart-tasks-lib';
import { Request, Response, NextFunction } from 'express';

import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';

export const businessLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const business = await BusinessModel.findOne({ email }).select('+password');
    if (!business) throw Error('Business not found');

    console.log(business);

    if (!bcrypt.compareSync(password, business.password)) {
      res.status(400).json({ message: 'Bad request' });
    } else {
      const token = jwt.sign({ _id: business._id }, process.env.JWT_SECRET, {
        expiresIn: 1000 * 60 * 60 * 24,
      });

      const authBusiness = await BusinessModel.findOne({
        _id: business._id,
      }).select('-password');

      res.json({
        message: 'Login successfull',
        success: true,
        authBusiness,
        token,
      });
    }
  } catch (error) {
    console.log(error);
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
