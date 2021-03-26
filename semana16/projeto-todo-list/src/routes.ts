import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetUserByIdController } from "./controllers/GetUserByIdController";

const router = Router();

const createUserController = new CreateUserController();
const getUserByIdController = new GetUserByIdController();

router.put("/user", createUserController.create);
router.get("/user/:id", getUserByIdController.show);

export { router };
