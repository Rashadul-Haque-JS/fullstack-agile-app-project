import { getUsersBusinessById } from '@repo-hubs/smart-tasks-lib';
import { Request, Response, NextFunction } from 'express';

export const userByBusinessId = async (req: Request, res: Response) => {
  const businessId = req.params.businessId;
  try {
    const users = await getUsersBusinessById(businessId);
    res.json({ success: true, users });
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
