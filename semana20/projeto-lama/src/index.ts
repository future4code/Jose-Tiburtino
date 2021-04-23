import dotenv from "dotenv";
import { AddressInfo } from "net";
import express from "express";
import { userRouter } from "./routes/userRouter";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/user", userRouter);

const server = app.listen(3333, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server running in http://localhost:${address.port}`);
  } else {
    console.error(`Error to running the server.`);
  }
});
