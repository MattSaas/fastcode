// import mongoose from "mongoose";

// const connectMongoos = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//   } catch (error) {
//     console.error(error);
//   }
// };

// export default connectMongoos;

import mongoose from "mongoose";

const connectMongoos = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to MongoDB");
    return;
  }
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectMongoos;
