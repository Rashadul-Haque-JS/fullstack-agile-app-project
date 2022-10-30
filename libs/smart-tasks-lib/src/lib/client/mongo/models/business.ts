import * as bcrypt from 'bcryptjs';
import { NextFunction } from 'express';
import { model, Schema } from 'mongoose';


//declare user type
export interface IBusiness {
  isModified: any;
  name: string;
  password: string;
  email: string;
}

// define user schema
const BusinessSchema: Schema = new Schema<IBusiness>(
  {
    name: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, 'Nmae is required'],
      index: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
      minlength: [6, 'Minimum of 6 characters are required'],
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, 'Email is required'],
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

BusinessSchema.pre<IBusiness>('save', function hashPassword(next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.hash(this.password, Number(process.env.HASH_SALT), (err, hashedPassword) => {
    if (err) return next(err);
    this.password = hashedPassword;
    next();
  });
});

BusinessSchema.methods.comparePassword = function (
  password: string,
  next: NextFunction
) {
  bcrypt.compare(password, this.password, (err, isMatched) => {
    if (err) return next(err);
    else {
      if (!isMatched) {
        return next('Wrong password');
      } else {
        return next(this);
      }
    }
  });
};

export const BusinessModel = model('Business', BusinessSchema);
