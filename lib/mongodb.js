import mongoose from 'mongoose';

let connection = null;

export const connectDB = async () => {
  if (connection) {
    console.log(`Using existing MongoDB connection`);
    return;
  }

  try {
    connection = await mongoose.connect(process.env.DATABASE_URL);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(`Error: ${error}`);
    // This will exit the process with failure
    process.exit(1);
  }
};

export const getConnection = () => {
  if (!connection) {
    throw new Error(`MongoDB connection has not been established`);
  }

  return connection;
};
