import express from "express";
import { createTask, getTaskById } from "./controller/taskController";
import { login } from "./controller/userController";
import { signup } from "./controller/userController";

export const router = express.Router();

router.post("/user/signup", signup);
router.post("/user/login", login);
router.put("/task", createTask);
router.get("/task/:id", getTaskById);
