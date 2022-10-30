import mongoose from 'mongoose';

export const smartDB = async () => {
  await mongoose.connect(String(process.env.MONGO_DATABASE_URI));
  console.log('MongoDb Connection established');
};
