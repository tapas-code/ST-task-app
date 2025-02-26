import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import taskRoutes from "./routes/task.routes"
import { globalErrorHandler } from "./middlewares/errorHandler";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.send("Task Management API is running");
});
app.use("/api/tasks", taskRoutes);
app.use(globalErrorHandler);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
