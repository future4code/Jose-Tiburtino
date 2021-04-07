import { Router } from "express";
import { GetAllSectionsController } from "./controllers/GetAllSectionsController";
import { GetAllUsersController } from "./controllers/GetAllUsersController";
import { GetFiveUsersController } from "./controllers/GetFiveUsersController";
import { GetOrderedUsersController } from "./controllers/GetOrderedUsersController";
import { GetUserByNameController } from "./controllers/GetUserByNameController";
import { GetUserTypeController } from "./controllers/GetUserTypeController";

const router = Router();

const getAllUsersController = new GetAllUsersController();
const getUserByNameController = new GetUserByNameController();
const getUserTypeController = new GetUserTypeController();
const getOrderedUsersController = new GetOrderedUsersController();
const getFiveUsersController = new GetFiveUsersController();
const getAllSectionsController = new GetAllSectionsController();

router.get("/users/all", getAllUsersController.show);
router.get("/users/search", getUserByNameController.show);
router.get("/users/ordered", getOrderedUsersController.show);
router.get("/users/paginated", getFiveUsersController.show);
router.get("/users/allsections", getAllSectionsController.show);
router.get("/users/:type", getUserTypeController.show);

export { router };
