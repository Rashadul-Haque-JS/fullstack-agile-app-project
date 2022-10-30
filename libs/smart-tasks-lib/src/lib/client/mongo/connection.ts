import mongoose from 'mongoose';
import { configData } from '../../config/envConfig';

export const smartDB = async (): Promise<any> => {

  try {
    if (!configData.database) throw new Error('Database not specified');
    const connection = await mongoose.connect(configData.database);
    if (!connection) throw new Error();
    console.log('Connected to database ' + typeof configData.database);

    return connection;
  } catch (err) {
    console.log((err as Error).message);
    return (err as Error).message;
  }
};
