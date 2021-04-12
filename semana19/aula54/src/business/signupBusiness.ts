import { insertUser } from "../data/userDatabase";
import { signupInput, user } from "../models/user";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";

export const signupBusiness = async (input: signupInput): Promise<string> => {
  try {
    if (!input.name || !input.email || !input.password || !input.role) {
      throw new Error('Preencha os campos "name","email" e "password"');
    }
    if (!input.email.includes("@")) {
      throw new Error("Email inválido");
    }
    if (input.password.length < 6) {
      throw new Error("Senha inválida, insira mais que 6 caracters");
    }
    const id: string = generateId();
    const hashPassword: string = await hash(input.password);
    const user: user = {
      id: id,
      name: input.name,
      email: input.email,
      password: hashPassword,
      role: input.role,
    };
    await insertUser(user);
    const token: string = generateToken({ id, role: input.role });
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};
