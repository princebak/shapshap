import mongoose from "mongoose";

let isConnected = false;

export const dbConnector = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected !");

    return;
  }

  // const MONGODB_URI = 'mongodb://localhost:27017/shapshap'

  const MONGODB_URI =
    "mongodb+srv://princebak:princebak@bakil-free-cluster.oejtkcq.mongodb.net/shapshap?retryWrites=true&w=majority";

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "shapshap",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected !");
  } catch (error) {
    console.log("MongoDB Connection Error >> ", error);
  }
};
