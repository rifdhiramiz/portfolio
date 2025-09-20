import mongoose from "mongoose";

const registerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "register" } // force Mongoose to use your "register" collection
);

export default mongoose.model("Register", registerSchema);
