## Exercício 1

A) Concordo que seja melhor usar strings do que números para representar IDs, as strings são sempre únicas e podem ser até mesmo menos vulneráveis a acontecer algum bug, como por exemplo o que aconteceu com o auxilio emergencial, onde usaram number para o CPF e os CPFs que começavam com 0 não estavam dando certo.

B)

```sh
export function generateId(): string {
  return v4();
}
```

---

## Exercício 2:

A) O Código cria a conexão com o nosso banco de dados e a função createUser faz um insert na tabela userTableName.

B)

```sh
CREATE TABLE User_Aula50 (
    id VARCHAR (255) UNIQUE NOT NULL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

C)

```sh
const insertUser = async (newUser: newUser) => {
  await connection
    .insert(newUser)
    .into("User_Aula50");
};
```

---

## Exercício 3:

A) Está transformando a chave JWT em uma string.

B)

```sh
type AuthenticationData = {
  id: string;
};

const expiresIn = "1min";

export const generateToken = (input: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id: input.id,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn,
    }
  );
  return token;
};
```

## Exercício 4:

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
    const id = generateId();
    const newUser: newUser = {
      id: id,
      email: email,
      password: password,
    };
    await insertUser(newUser);
    const token = generateToken({ id });
    res.status(200).send({ token });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
```

---

## Exercício 5:

A)

```sh
export const selectUserLogin = async (email: string): Promise<any> => {
  try {
    const result = await connection("User_Aula50").select("*").where({ email });
    return result[0];
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
```

---

## Exercício 6:

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
    const token = generateToken({ id: user.id });
    res.status(200).send({ token });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
```

---

## Exercício 7:

A) A linha que tem o _as any_ diz que pode ser qualquer coisa, o _as any_ é necessário para não dar erro ao transpilar.

B)

```sh
export const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };

  return result;
};
```

## Exercício 8:

A)

```sh
export const selectUserById = async (id: string): Promise<any> => {
  try {
    const result = await connection("User_Aula50").select("*").where({ id });
    return result[0];
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
```

B)

```sh
export const getUserById = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);
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
