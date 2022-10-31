import * as bcrypt from 'bcryptjs';
import { NextFunction } from 'express';
import { model, Schema } from 'mongoose';

//declare user type
export interface IBusiness {
  isModified: any;
  name: string;
  password: string;
  email: string;
  defualt_admin_name: string;
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

    defualt_admin_name: {
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
