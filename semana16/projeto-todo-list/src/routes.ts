import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { EditUserController } from "./controllers/EditUserController";
import { GetUserByIdController } from "./controllers/GetUserByIdController";

const router = Router();

const createUserController = new CreateUserController();
const getUserByIdController = new GetUserByIdController();
const editUserController = new EditUserController();

router.put("/user", createUserController.create);
router.get("/user/:id", getUserByIdController.show);
router.post("/user/edit/:id", editUserController.execute);

export { router };
