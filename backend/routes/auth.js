import express from "express";
import Register from "../models/Register.js"; // your User model
import bcrypt from "bcryptjs";

const router = express.Router();

// ----------------------
// Register Route
// ----------------------
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await Register.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, error: "Email already registered" });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new Register({ name, email, password: hashedPassword });
    await newUser.save();

    res.json({ success: true, message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: "Server error" });
  }
});

// ----------------------
// Login Route
// ----------------------
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await Register.findOne({ email });
    if (!user) {
      return res.json({ success: false, error: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, error: "Invalid password" });
    }

    // Login successful
    res.json({ success: true, message: "Login successful" });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: "Server error" });
  }
});

export default router;
