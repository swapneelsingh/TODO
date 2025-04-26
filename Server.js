import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./db/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection failed !!! : ", error);
  });
