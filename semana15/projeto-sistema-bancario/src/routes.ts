import { Router } from "express";
import { AccountController } from "./controllers/AccountController";
import { BalanceController } from "./controllers/BalanceController";
import { UsersController } from "./controllers/UsersController";

const router = Router();

const accountController = new AccountController();
const usersController = new UsersController();
const balanceController = new BalanceController();

router.post("/create", accountController.create);
router.get("/account/all", usersController.show);
router.get("/account/search", balanceController.show);
router.put("/account/deposit", balanceController.execute);

export { router };
