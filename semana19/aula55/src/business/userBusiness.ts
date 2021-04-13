import { signupInputDTO, convertStringToUserRole } from "../model/user";
import { generateId } from "../services/idGenerator";
import { compare, hash } from "../services/hashManager";
import { generateToken } from "../services/authenticator";
import { loginInput, user } from "../model/user";
import { insertUser, selectUserByEmail } from "../data/userDatabase";

export async function signupBusiness(input: signupInputDTO): Promise<string> {
  try {
    if (
      !input.name ||
      !input.nickname ||
      !input.email ||
      !input.password ||
      !input.role
    ) {
      throw new Error(
        'Preencha os campos "name","nickname", "email" e "password"'
      );
    }

    const id: string = generateId();

    const cypherPassword = await hash(input.password);

    await insertUser({
      id,
      name: input.name,
      nickname: input.nickname,
      email: input.email,
      password: cypherPassword,
      role: convertStringToUserRole(input.role),
    });

    const token: string = generateToken({
      id,
      role: convertStringToUserRole(input.role),
    });

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function loginBusiness(input: loginInput): Promise<string> {
  try {
    if (!input.email || !input.password) {
      throw new Error("'email' e 'senha' são obrigatórios");
    }

    const user: user = await selectUserByEmail(input.email);

    if (!user) {
      throw new Error("Usuário não encontrado ou senha incorreta");
    }

    const passwordIsCorrect: boolean = await compare(
      input.password,
      user.password
    );

    if (!passwordIsCorrect) {
      throw new Error("Usuário não encontrado ou senha incorreta");
    }

    const token: string = generateToken({
      id: user.id,
      role: user.role,
    });

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
}
