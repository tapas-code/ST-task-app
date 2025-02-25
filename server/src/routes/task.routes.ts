import { Router } from "express";
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller";
import { validateTask } from "../middlewares/task.validator";
import { handleValidationErrors } from "../middlewares/errorHandler";

const router = Router();

router.get("/", getAllTasks);
router.get("/:id", getTaskById);
router.post("/", validateTask(), handleValidationErrors, createTask);
router.put("/:id", validateTask(), handleValidationErrors, updateTask);
router.delete("/:id", deleteTask);

export default router;
