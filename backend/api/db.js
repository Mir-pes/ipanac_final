import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    const mongoURI = process.env.MONGODB_URI;
    console.log(`Attempting to connect to MongoDB at: ${mongoURI}`);
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${mongoose.connection.host}`);
  }
  return mongoose.connection;
};

export default connectDB;