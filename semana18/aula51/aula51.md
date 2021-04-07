## Exercício 1:

A) O round é o cost, onde um valor faz a definição do tempo. Se passarmos um valor muito grande ao cost possa ser que a requisição fique lenta. O Salt é um valor aleatório gerado pelo bCrypt. São recomendados valores alto para o round, no meu caso coloquei 12 que é o padrão.

B)

```sh
export const hash = async (s: string): Promise<string> => {
  const rounds = Number(process.env.BCRYPT_COST);
  const salt = await bcrypt.genSalt(rounds);
  const result = await bcrypt.hash(s, salt);
  return result;
};
```

C)

```sh
export const compare = (s: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(s, hash);
};
```

---

## Exercício 2:

A) Para os testes serem realizados corretamente, devemos modificar o cadastro primeiro, pois assim que o usuário for cadastrado a senha será encriptada.

B)

```sh
export const createUser = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { email, password } = req.body;
    if (!email || email.indexOf("@") === -1) {
      throw new Error("Email inválido!");
    }
    if (!password || password.length < 6) {
      throw new Error("Senha inválida!");
    }
    const hashPassword: string = await hash(password);
    const id = generateId();
    const newUser: newUser = {
      id: id,
      email: email,
      password: hashPassword,
    };
    await insertUser(newUser);
    const token = generateToken({ id });
    res.status(200).send({ token });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
```

C)

```sh
export const userLogin = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { email, password } = req.body;
    if (!email || email.indexOf("@") === -1) {
      throw new Error("Email inválido!");
    }
    if (!password || password.length < 6) {
      throw new Error("Senha inválida!");
    }
    const user = await selectUserLogin(email);
    if (!user) {
      throw new Error("Usuário não existe.");
    }
    const passwordCompare = await compare(req.body.password, user.password);
    if (!passwordCompare) {
      throw new Error("Invalid password");
    }
    const token = generateToken({ id: user.id });
    res.status(200).send({ token });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
```

D) Não é necessário modificar o endpoint user/profile pois ele somente está nos mostrando a informação de um determinado usuário.

---

## Exercício 3:

A)

```sql
ALTER TABLE
  User_Aula50
ADD
  role ENUM("NORMAL", "ADMIN") DEFAULT("NORMAL");
```

B)

```sh
type AuthenticationData = {
  id: string;
  role: string;
};
```

```sh
export const getTokenData = (token: string): AuthenticationData => {
  const payload = jwt.verify(
    token,
    process.env.JWT_KEY as string
  ) as AuthenticationData;

  return {
    id: payload.id,
    role: payload.role,
  };
};
```

C)

```sh
export const createUser = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { email, password, role } = req.body;
    if (!email || email.indexOf("@") === -1) {
      throw new Error("Email inválido!");
    }
    if (!password || password.length < 6) {
      throw new Error("Senha inválida!");
    }
    const hashPassword: string = await hash(password);
    const id = generateId();
    const newUser: newUser = {
      id: id,
      email: email,
      password: hashPassword,
      role: role || "NORMAL",
    };
    await insertUser(newUser);
    const token = generateToken({ id, role });
    res.status(200).send({ token });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
```

D)

```sh
export const userLogin = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { email, password, role } = req.body;
    if (!email || email.indexOf("@") === -1) {
      throw new Error("Email inválido!");
    }
    if (!password || password.length < 6) {
      throw new Error("Senha inválida!");
    }
    const user = await selectUserLogin(email);
    if (!user) {
      throw new Error("Usuário não existe.");
    }
    const passwordCompare = await compare(req.body.password, user.password);
    if (!passwordCompare) {
      throw new Error("Invalid password");
    }
    const token = generateToken({ id: user.id, role: user.role });
    res.status(200).send({ token });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};

```

## Exercício 4:

A)

```sh
export const getUserById = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);
    if (authenticationData.role !== "NORMAL") {
      errorCode = 401;
      throw new Error("Only a normal user can access this funcionality");
    }
    const user = await selectUserById(authenticationData.id);
    if (!user) {
      throw new Error("Usuário inexistente.");
    }
    res.status(200).send({
      message: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
```

## Exercício 5:

```sh
export const deleteUserById = async (id: string): Promise<void> => {
  try {
    await connection("User_Aula50").where({ id }).delete();
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
```

```sh
export const deleteUser = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { id } = req.params;
    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);
    if (authenticationData.role !== "ADMIN") {
      errorCode = 401;
      throw new Error("Only a admin user can access this funcionality");
    }
    await deleteUserById(id);
    res.status(200).send({ message: "User deleted." });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
```
