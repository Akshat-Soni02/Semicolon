// Import required modules using ESM syntax
import express from "express";
import errrMiddleware from "./middleware/error.js"; // Make sure to use the .mjs file extension for ESM
import cookieParser from "cookie-parser";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

// Create an Express application
const app = express();


app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


// Error Middleware
app.use(errrMiddleware);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.static(path.join(__dirname, "build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

export default app;
