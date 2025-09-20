import express from "express";
import User from "./models/User.js"; // Mongoose User model
import bcrypt from "bcryptjs";

const router = express.Router();

// POST /login
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.json({ success: false, error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ success: false, error: "Invalid password" });

    res.json({ success: true, message: "Login successful" });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: "Server error" });
  }
});

export default router;
