import { Router } from "express";
import { CreateTaskController } from "./controllers/CreateTaskController";
import { CreateUserController } from "./controllers/CreateUserController";
import { EditStatusTaskController } from "./controllers/EditStatusTaskController";
import { EditUserController } from "./controllers/EditUserController";
import { GetAllUsersController } from "./controllers/GetAllUsersController";
import { GetResponsibleUserForTask } from "./controllers/GetResponsibleUserForTask";
import { GetTaskByIdController } from "./controllers/GetTaskByIdController";
import { GetTaskByUserIdController } from "./controllers/GetTaskByUserIdController";
import { GetUserByIdController } from "./controllers/GetUserByIdController";
import { ResponsibleForATaskController } from "./controllers/ResponsibleForATaskController";
import { SearchUserController } from "./controllers/SearchUserController";

const router = Router();

const createUserController = new CreateUserController();
const getUserByIdController = new GetUserByIdController();
const editUserController = new EditUserController();
const createTaskController = new CreateTaskController();
const getTaskByIdController = new GetTaskByIdController();
const getAllUsersController = new GetAllUsersController();
const getTaskByUserIdController = new GetTaskByUserIdController();
const searchUserController = new SearchUserController();
const responsibleForATaskController = new ResponsibleForATaskController();
const getResponsibleUserForTask = new GetResponsibleUserForTask();
const editStatusTaskController = new EditStatusTaskController();

router.put("/user", createUserController.create);
router.get("/user/all", getAllUsersController.show);
router.get("/user/:id", getUserByIdController.show);
router.post("/user/edit/:id", editUserController.execute);
router.put("/task", createTaskController.create);
router.get("/task/:id", getTaskByIdController.show);
router.get("/task", getTaskByUserIdController.show);
router.get("/user", searchUserController.show);
router.post("/task/responsible", responsibleForATaskController.execute);
router.post("/task/status/edit", editStatusTaskController.execute);
router.get("/task/:id/responsible", getResponsibleUserForTask.show);

export { router };
