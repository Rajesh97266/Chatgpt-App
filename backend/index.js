import express from "express";
import ImageKit from "imagekit";
import mongoose from "mongoose";

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

import cors from "cors";

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/api/upload", (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

const connect = async () => {
  try {
   
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

app.post("/api/chats", async (req, res) => {
  const { text } = req.body;
 
  
});

app.listen(port, () => {
  connect();
  console.log(`Server is running on port ${port}`);
});
