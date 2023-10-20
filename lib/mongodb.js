import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(`Error: ${error}`);
    // This will exit the process with failure
    // process.exit(1);
  }
};
