import mongoose from 'mongoose';

export const smartDB = async () => {
  await mongoose.connect(
    'mongodb+srv://doadmin:KA681U2M4p0Jl5F3@smart-db-hub-7f27fcd7.mongo.ondigitalocean.com/admin?tls=true&authSource=admin&replicaSet=smart-db-hub'
  );
  console.log('MongoDb Connection established');
};
