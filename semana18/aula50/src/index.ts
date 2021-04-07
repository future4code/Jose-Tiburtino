import express from "express";
import { AddressInfo } from "net";
import { createUser } from "./endpoints/createUser";
import { getUserById } from "./endpoints/getUserById";
import { userLogin } from "./endpoints/userLogin";

const app = express();
app.use(express.json());

app.post("/user/signup", createUser);
app.post("/user/login", userLogin);
app.get("/user/info", getUserById);

const server = app.listen(process.env.PORT || 3333, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
