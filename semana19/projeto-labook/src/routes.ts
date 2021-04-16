import { Router } from "express";
import { PostController } from "./controllers/PostController";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();
const postController = new PostController();

router.post("/user/signup", userController.signup);
router.post("/user/login", userController.login);
router.post("/user/friendship", userController.makeFriendship);
router.delete("/user/unfriend/:resFriend_id", userController.undoFriendship);

router.post("/post/create", postController.createPost);
router.get("/post/feed", postController.getAllPosts);
router.get("/post/:id", postController.getPostById);

export { router };
