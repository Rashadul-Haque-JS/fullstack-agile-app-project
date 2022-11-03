import mongoose from 'mongoose';

export const smartDB = async () => {
  console.log('DATABASE_URL', process.env.MONGO_URl);
  if (!process.env.MONGO_URL) {
    console.log('undefined');
  } else {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('DATABASE_URL IS CONNECTED');
  }
};
