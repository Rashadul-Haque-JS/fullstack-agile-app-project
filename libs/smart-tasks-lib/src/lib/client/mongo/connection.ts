import mongoose from 'mongoose';

export const smartDB = async () => {
  console.log('DATABASE_URL', process.env.DATABASE_URl);
  if (!process.env.DATABASE_URL) {
    console.log('undefined');
  } else {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('DATABASE_URL IS CONNECTED');
  }
};
