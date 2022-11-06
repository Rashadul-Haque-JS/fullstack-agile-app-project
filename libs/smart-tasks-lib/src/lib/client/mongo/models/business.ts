import * as bcrypt from 'bcryptjs';
import { NextFunction } from 'express';
import { model, Schema } from 'mongoose';

//declare user type
export interface IBusiness {
  isModified: any;
  name: string;
  password: string;
  email: string;
  street: string;
  post: string;
  city: string;
  country: string;
  admin: string;
}

// define user schema
const BusinessSchema: Schema = new Schema<IBusiness>(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'Business name is required'],
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, 'Email is required'],
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
      minlength: [6, 'Minimum of 6 characters are required'],
    },
    street: {
      type: String,
      required: [true, 'Street is required'],
    },

    post: {
      type: String,
      required: [true, 'Post is required'],
    },
    city: {
      type: String,
      required: [true, 'City is required'],
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
    },
    admin: {
      type: String,
      default: 'Admin',
      index: true,
    },
  },
  { timestamps: true }
);

BusinessSchema.pre<IBusiness>('save', function hashPassword(next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.hash(
    this.password,
    Number(process.env.HASH_SALT),
    (err, hashedPassword) => {
      if (err) return next(err);
      this.password = hashedPassword;
      next();
    }
  );
});

export const BusinessModel = model('Business', BusinessSchema);
