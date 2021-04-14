import { Router } from "express";
import { PostController } from "./controllers/PostController";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();
const postController = new PostController();

export { router };
