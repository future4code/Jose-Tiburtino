import { Router } from "express";
import { FollowController } from "./controllers/FollowController";
import { RecipeController } from "./controllers/RecipeController";
import { UnfollowController } from "./controllers/UnfollowController";
import { UserController } from "./controllers/UserController";
import { UsersProfilesController } from "./controllers/UsersProfilesController";

const router = Router();

const userController = new UserController();
const usersProfilesController = new UsersProfilesController();
const recipeController = new RecipeController();
const followController = new FollowController();
const unfollowController = new UnfollowController();

router.post("/cookenu/signup", userController.create);
router.post("/cookenu/login", userController.execute);
router.get("/cookenu/user/profile", userController.show);

router.get("/cookenu/user/:id", usersProfilesController.show);

router.post("/cookenu/recipe", recipeController.create);
router.get("/cookenu/recipe/:id", recipeController.show);

router.post("/cookenu/user/follow", followController.execute);
router.post("/cookenu/user/unfollow", unfollowController.execute);

export { router };
