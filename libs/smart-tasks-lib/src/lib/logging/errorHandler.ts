import { SmartError } from './errors';
import { MongooseError } from 'mongoose';
import { Request, Response, NextFunction } from 'express';

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof SmartError) {
    res.status(error.errorCode!).json({ error_message: error.message, error_code:error.errorCode, success: false });
  } else if (error instanceof MongooseError) {
    res.status(400).json({ error_message: error.message, error_code:400, success: false});
  } else if (error instanceof SyntaxError) {
    res.status(400).json({ error: 'Invalid JSON' });
  } else {
    console.error('find ',error);
    res.status(500).json({
      error_message: error.message,error_code:500, success: false
    });
  }
};

export { errorHandler };
