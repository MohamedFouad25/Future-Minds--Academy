import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import authRoutes from "./routes/auth.js";

  dotenv.config();

  const app = express();

  app.use(cors());
  app.use(express.json());

  const __dirname = path.resolve(); 
  app.use(express.static(path.join(__dirname, "public")));

  app.use("/api/auth", authRoutes);

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

  const PORT = process.env.PORT || 5000;
  const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/futureMinds";

    mongoose
    .connect(MONGO_URI)
    .then(() => {
      app.listen(PORT, () => console.log(`✅ Server started on port ${PORT}`));
    })
    .catch((err) => console.error("❌ DB Connection Error:", err));
