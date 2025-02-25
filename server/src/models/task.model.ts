import { Schema, model, Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  deadline: Date;
  status: "todo" | "onProgress" | "completed" | "expired";
  priority: "high" | "low";
  checkTimeout(): Promise<void>;
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
      enum: ["todo", "onProgress", "completed", "timeout"],
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

TaskSchema.methods.checkTimeout = async function (): Promise<void> {
    const now = new Date();
    if(now>this.deadline && this.status !== "completed" && this.status !== "timeout"){
        this.status = "timeout";
        await this.save();
    }
}

const Task = model<ITask>("Task", TaskSchema);

export default Task;
