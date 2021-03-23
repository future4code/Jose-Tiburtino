import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { user, users } from "./users";

const app: Express = express();

app.use(express.json());
app.use(cors());

// Exercício 1:
// a: GET.
// b: A entidade seria o users.

app.get("/users/all", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const result: user[] = users;
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

// Exercício 2:
// A: Os parâmetros foram passados por query.
// B: Sim, utilizei uma condição para validar os tipos.

app.get("/users/search-type", (req: Request, res: Response) => {
  let errorCode: number = 400;
  const validTypes = ["ADMIN", "NORMAL"];
  try {
    const search: string = (req.query.type as string).toUpperCase();
    if (!validTypes.includes(search)) {
      throw new Error("Invalid Query!");
    }
    const result: user[] = users.filter((user) => {
      return user.type.toUpperCase() === search;
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

// Exercício 3:
// A: Query params.

app.get("/users/search-name", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const name: string = req.query.name as string;
    if (!name) {
      errorCode = 422;
      throw new Error("Invalid name.");
    }
    const myUsers = users;
    const myUser = myUsers.find((u: user) => {
      return u.name.toLowerCase() === name.toLowerCase();
    });

    if (!myUser) {
      errorCode = 404;
      throw new Error("User not found.");
    }

    res.status(200).send(myUser);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

// Exercício 4:
// A: O método PUT somente altera a informação do usuário.
// B: Não, como disse acima, a função do método PUT é alterar alguma informação.

app.post("/users/create", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const userCreate: user = {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      age: req.body.age,
    };
    if (
      !userCreate.name ||
      !userCreate.email ||
      !userCreate.type ||
      !userCreate.age
    ) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }
    users.push(userCreate);
    res.status(201).send({ message: "User created successfully!" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Exercício 5:

app.put("/users/edit/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const reqBody: { id: number; name: string } = {
      id: Number(req.params.id),
      name: req.body.name,
    };
    if (!reqBody.name) {
      errorCode = 422;
      throw new Error("Please check the name!");
    }
    if (isNaN(Number(reqBody.id))) {
      errorCode = 422;
      throw new Error("Invalid ID!");
    }
    const userIndex = users.findIndex((u: user) => u.id === Number(reqBody.id));

    if (userIndex < 0) {
      errorCode: 404;
      throw new Error("User not found!");
    }

    users[userIndex] = {
      ...users[userIndex],
      name: `${reqBody.name} - ALTERADO`,
    };
    res.status(200).send({ message: "User successfully updated!" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// EXERCÍCIO 6:

app.patch("/users/patch/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const reqBody: { id: number; name: string } = {
      id: Number(req.params.id),
      name: req.body.name,
    };
    if (!reqBody.name) {
      errorCode = 422;
      throw new Error("Please check the name!");
    }
    if (isNaN(Number(reqBody.id))) {
      errorCode = 422;
      throw new Error("Invalid ID!");
    }
    const userIndex = users.findIndex((u: user) => u.id === Number(reqBody.id));

    if (userIndex < 0) {
      errorCode = 404;
      throw new Error("User not found!");
    }

    users[userIndex] = {
      ...users[userIndex],
      name: `${reqBody.name} - REALTERADO`,
    };
    res.status(200).send({ message: "User successfully patched!" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Exercício 7:

app.delete("/users/delete/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const userIndex = users.findIndex(
      (u: user) => u.id === Number(req.params.id)
    );
    if (userIndex < 0) {
      errorCode = 404;
      throw new Error("User not found!");
    }
    users.splice(userIndex, 1);
    res.status(200).send({ message: "User successfully deleted!" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

const server = app.listen(process.env.PORT || 3333, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in ${address.port}`);
  } else {
    console.log("Failure upon starting server.");
  }
});
