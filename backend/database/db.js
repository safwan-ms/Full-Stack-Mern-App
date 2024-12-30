import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB successfully connected`);
  } catch (error) {
    console.error(`MongoDB connection failed ${error.message}`);
  }
};

export default connectDB;