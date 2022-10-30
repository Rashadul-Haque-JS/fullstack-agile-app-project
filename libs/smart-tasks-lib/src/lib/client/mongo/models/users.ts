import * as bcrypt from 'bcryptjs';
import { NextFunction } from 'express';
import { model, Schema } from 'mongoose';

//declare user type
export interface IUser {
  isModified: any;
  name: string;
  password: string;
  email: string;
  businessId: string;
  avatar: string;
}

// define user schema
const UserSchema: Schema = new Schema<IUser>(
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
    businessId: {
      type: String,
      lowercase: true,
      required: [true, 'Business Id is required'],
    },
    avatar: {
      type: String,
      required: false,
      default: 'default-avatar.png',
    },
  },
  { timestamps: true }
);

UserSchema.pre<IUser>('save', function hashPassword(next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.hash(this.password,Number(process.env.HASH_SALT), (err, hashedPassword) => {
    if (err) return next(err);
    this.password = hashedPassword;
    next();
  });
});

UserSchema.methods.comparePassword = function (
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

export const UserModel = model('User', UserSchema);
