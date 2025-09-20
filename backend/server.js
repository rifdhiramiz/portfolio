// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import authRoutes from "./routes/auth.js";

dotenv.config();
const app = express();

// -------------------- MIDDLEWARE --------------------
app.use(cors()); // allow requests from any origin
app.use(express.json()); // parse JSON requests

// -------------------- MONGODB CONNECTION --------------------
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// -------------------- ROUTES --------------------
// Authentication routes
app.use("/auth", authRoutes);

// -------------------- GOOGLE ANALYTICS 4 SETUP --------------------
const gaClient = new BetaAnalyticsDataClient({
  keyFilename: "./service-account.json", // service account JSON
});
const propertyId = process.env.GA4_PROPERTY_ID;

// GA4 Stats endpoint
app.get("/stats", async (req, res) => {
  try {
    const [response] = await gaClient.runReport({
      property: `properties/${propertyId}`,
      dimensions: [{ name: "eventName" }],
      metrics: [{ name: "eventCount" }],
      dateRanges: [{ startDate: "2023-01-01", endDate: "today" }],
    });

    res.json(response);
  } catch (err) {
    console.error("Error fetching GA data:", err);
    res.status(500).json({ error: "Failed to fetch GA data" });
  }
});

// -------------------- START SERVER --------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
