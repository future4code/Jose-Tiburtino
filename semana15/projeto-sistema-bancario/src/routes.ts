import { Router } from "express";
import { AccountController } from "./controllers/AccountController";
import { BalanceController } from "./controllers/BalanceController";
import { InternTransferController } from "./controllers/InternTransferController";
import { PaymentController } from "./controllers/PaymentController";
import { TransactionController } from "./controllers/TransactionController";
import { UsersController } from "./controllers/UsersController";

const router = Router();

const accountController = new AccountController();
const usersController = new UsersController();
const balanceController = new BalanceController();
const transactionController = new TransactionController();
const paymentController = new PaymentController();
const internTransferController = new InternTransferController();

router.post("/account/create", accountController.create);
router.get("/account/all", usersController.show);
router.get("/account/search", balanceController.show);
router.put("/account/search/:cpf", balanceController.execute);
router.put("/account/deposit", transactionController.execute);
router.post("/account/pay", paymentController.execute);
router.post("/account/transfer", internTransferController.execute);

export { router };
