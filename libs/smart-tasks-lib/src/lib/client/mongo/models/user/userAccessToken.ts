import { NextFunction } from 'express';
import { model, Schema } from 'mongoose';

//declare user type
export interface IUToken {
  name: any;
  userId: any;
  businessId: any;
  token: any;
  used_log: any;
}

// define user schema
const UTokenSchema: Schema = new Schema<IUToken>(
  {
    name: {
      type: String,
      required: [true, 'user name is required'],
    },
    userId: {
      type: String,
      required: [true, 'user id is required'],
    },
    businessId: {
      type: String,
      required: [true, 'Business id is required'],
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

export const UAccessTokenModel = model('users_access-token', UTokenSchema);
