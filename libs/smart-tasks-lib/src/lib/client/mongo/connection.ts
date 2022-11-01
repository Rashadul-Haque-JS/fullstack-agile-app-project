import mongoose from 'mongoose';

export const smartDB = async () => {
  console.log('DATABASE_URL', process.env.MONGO_URI);
  if (!process.env.MONGO_URI) {
    console.log('undefined');
  } else {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('DATABASE_URL IS CONNECTED');
  }
};
