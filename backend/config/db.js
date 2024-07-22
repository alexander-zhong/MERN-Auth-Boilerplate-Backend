import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;