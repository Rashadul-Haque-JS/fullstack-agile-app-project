import { NextFunction } from 'express';
import { model, Schema } from 'mongoose';

//declare user type
export interface IBToken {
  name: any;
  businessId: any;
  token: any;
  used_log: any;
}

// define user schema
const BTokenSchema: Schema = new Schema<IBToken>(
  {
    name: {
      type: String,
      required: [true, 'Business name is required'],
      index: true,
    },
    businessId: {
      type: String,
      lowercase: true,
      required: [true, 'Business id is required'],
      index: true,
    },
    token: {
      type: String,
      required: [true, 'Token id is required'],
    },
    used_log: {
      type: String,
      required: [true, 'loged time is required'],
    },
  },
  { timestamps: true }
);

export const BAccessTokenModel = model('Business_access-token', BTokenSchema);
