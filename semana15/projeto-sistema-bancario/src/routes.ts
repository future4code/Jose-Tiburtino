import { Router } from "express";
import { AccountController } from "./controllers/AccountController";
import { BalanceController } from "./controllers/BalanceController";
import { PaymentController } from "./controllers/PaymentController";
import { TransactionController } from "./controllers/TransactionController";
import { UsersController } from "./controllers/UsersController";

const router = Router();

const accountController = new AccountController();
const usersController = new UsersController();
const balanceController = new BalanceController();
const transactionController = new TransactionController();
const paymentController = new PaymentController();

router.post("/account/create", accountController.create);
router.get("/account/all", usersController.show);
router.get("/account/search", balanceController.show);
router.post("/account/deposit", transactionController.execute);
router.post("/account/pay", paymentController.execute);

export { router };
