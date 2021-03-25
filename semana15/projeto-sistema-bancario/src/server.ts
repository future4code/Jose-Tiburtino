import { app } from ".";
import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3333, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in ${address.port}`);
  } else {
    console.log("Failure upon starting server.");
  }
});
