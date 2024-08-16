import mongoose from "mongoose";

// const connectionUri =
//   "mongodb+srv://aswaniflyferry:WtMBO8os1RYSdF3r@shaperdb.7hx2uje.mongodb.net/Node-Sharper-C?retryWrites=true&w=majority&appName=ShaperDB";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MOngo DB Connected", connectionInstance.connection.host);
  } catch (error) {
    console.log("Mongo connection failed", error);
    process.exit(1); //exit the process
  }
};

export default connectDB;
