import { Router } from "express";
import { CreateTaskController } from "./controllers/CreateTaskController";
import { CreateUserController } from "./controllers/CreateUserController";
import { EditUserController } from "./controllers/EditUserController";
import { GetAllUsersController } from "./controllers/GetAllUsersController";
import { GetTaskByIdController } from "./controllers/GetTaskByIdController";
import { GetUserByIdController } from "./controllers/GetUserByIdController";

const router = Router();

const createUserController = new CreateUserController();
const getUserByIdController = new GetUserByIdController();
const editUserController = new EditUserController();
const createTaskController = new CreateTaskController();
const getTaskByIdController = new GetTaskByIdController();
const getAllUsersController = new GetAllUsersController();

router.put("/user", createUserController.create);
router.get("/user/all", getAllUsersController.show);
router.get("/user/:id", getUserByIdController.show);
router.post("/user/edit/:id", editUserController.execute);
router.put("/task", createTaskController.create);
router.get("/task/:id", getTaskByIdController.show);

export { router };
