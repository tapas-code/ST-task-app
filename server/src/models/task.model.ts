import { Schema, model, Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  deadline: Date;
  status: "todo" | "onProgress" | "completed" | "expired";
  priority: "high" | "low";
}

const TaskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["todo", "onProgress", "completed", "expired"],
      default: "todo",
    },
    priority: {
      type: String,
      enum: ["high", "low"],
      default: "low",
    },
  },
  {
    timestamps: true,
  }
);

const Task = model<ITask>("Task", TaskSchema);

export default Task;
