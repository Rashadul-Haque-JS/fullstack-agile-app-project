import { UserModel, IUToken, addUAToken } from '@repo-hubs/smart-tasks-lib';
import { Request, Response, NextFunction } from 'express';

import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';

export const userLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email }).select('+password');
    if (!user) throw Error('User not found');

    console.log(user);

    if (!bcrypt.compareSync(password, user.password)) {
      res.status(400).json({ message: 'Bad request' });
    } else {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: 1000 * 60 * 60 * 24,
      });

      const authUser = await UserModel.findOne({
        _id: user._id,
      }).select('-password');

      const accessData = {
        name: authUser.name,
        userId: authUser._id,
        businessId: authUser.businessId,
        token,
        used_log: new Date(),
      };

      const tokenLog = await addUAToken(accessData);
      await tokenLog.save();

      res.json({
        message: 'Login successfull',
        success: true,
        id:authUser._id,
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
