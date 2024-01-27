// Import required modules using ESM syntax
import express from "express";
import errrMiddleware from "./middleware/error.js"; // Make sure to use the .mjs file extension for ESM
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
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
app.use(fileUpload());

// Import routes
import userRoutes from "./routes/userRoutes.js";
import communityRoutes from "./routes/communityRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

// Use routes
app.use("/api/v1", userRoutes);
app.use("/api/v1", communityRoutes);
app.use("/api/v1/post", postRoutes);
app.use("/api/v1", commentRoutes);

// Error Middleware
app.use(errrMiddleware);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.static(path.join(__dirname, "build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

export default app;
