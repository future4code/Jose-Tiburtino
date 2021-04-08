import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { UsersProfilesController } from "./controllers/UsersProfilesController";

const router = Router();

const userController = new UserController();
const usersProfilesController = new UsersProfilesController();

router.post("/cookenu/signup", userController.create);
router.post("/cookenu/login", userController.execute);
router.get("/cookenu/user/profile", userController.show);

router.get("/cookenu/user/:id", usersProfilesController.show);

export { router };
