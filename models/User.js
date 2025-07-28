import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  governorate: { type: String, required: true },
  role: { type: String, enum: ["admin", "student"], default: "student" },
  password: { type: String, required: true }
});

export default mongoose.model("User", userSchema);
