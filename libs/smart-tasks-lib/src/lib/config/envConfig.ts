import * as dotenv from 'dotenv';
dotenv.config();

export const configData = {
  port: process.env.PORT,
  database: process.env.MONGO_DATABASE_URI,
  jwt_secret: process.env.JWT_SECRET,
  salt: Number(process.env.HASH_SALT),
};
