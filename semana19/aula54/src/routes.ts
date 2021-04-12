import { Router } from "express";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/all", userController.getAllUsers);
router.delete("/:id", userController.deleteUser);

export { router };
