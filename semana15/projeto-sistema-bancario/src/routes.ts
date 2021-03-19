import { Router } from "express";
import { AccountController } from "./controllers/AccountController";
import { UsersController } from "./controllers/UsersController";

const router = Router();

const accountController = new AccountController();
const usersController = new UsersController();

router.post("/create", accountController.create);
router.get("/users/all", usersController.show);

export { router };
