// Import required modules using ESM syntax
import express from "express";
import errrMiddleware from "./middleware/error.js"; // Make sure to use the .mjs file extension for ESM
import cookieParser from "cookie-parser";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import userRoutes from "./routes/userRoutes.js"; // Make sure to use the .mjs file extension for ESM
import eventRoutes from "./routes/eventRoutes.js"; // Make sure to use the .mjs file extension for ESM
import teamRoutes from "./routes/teamRoutes.js"; // Make sure to use the .mjs file extension for ESM

// Create an Express application
const app = express();

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dluqqyy3w",
  api_key: "338578789435974",
  api_secret: "eYvqCRzwdC0eArPRLspabtr8F4g",
});

// CORS
const allowedOrigins = [
  "http://3.110.189.165:4000",
  "https://mindbendsvnit.in",
];

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Import all routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/", eventRoutes);
app.use("/api/v1/", teamRoutes);

// Error Middleware
app.use(errrMiddleware);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

export default app;
