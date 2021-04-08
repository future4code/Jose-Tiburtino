import { Router } from "express";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();

router.post("/cookenu/signup", userController.create);
router.post("/cookenu/login", userController.execute);

export { router };
