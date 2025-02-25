import { body, ValidationChain } from "express-validator";

export const validateTask = (): ValidationChain[] => [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters long"),

  body("description")
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 5 })
    .withMessage("Description must be at least 5 characters long"),

  body("deadline")
    .notEmpty()
    .withMessage("Deadline is required")
    .isISO8601()
    .withMessage("Deadline must be a valid date"),

  body("status")
    .optional()
    .isIn(["todo", "onProgress", "completed", "timeout"])
    .withMessage("Invalid status value"),

  body("priority")
    .optional()
    .isIn(["high", "low"])
    .withMessage("Priority must be either 'high' or 'low'"),
];
