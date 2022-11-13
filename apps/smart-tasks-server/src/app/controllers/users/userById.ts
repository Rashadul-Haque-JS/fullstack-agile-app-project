import { getUserById } from '@repo-hubs/smart-tasks-lib';
import { Request, Response, NextFunction } from 'express';

export const userById = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const user = await getUserById(userId);
    res.json({ success: true, user });
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
