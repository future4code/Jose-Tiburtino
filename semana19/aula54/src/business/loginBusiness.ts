import { compare } from "bcryptjs";
import { selectUserByEmail } from "../data/userDatabase";
import { LoginInput, user } from "../models/user";
import { generateToken } from "../services/authenticator";

export const loginBusiness = async (input: LoginInput): Promise<string> => {
  try {
    if (!input.email || !input.password) {
      throw new Error("Coloque suas crendeciais para logar.");
    }
    const user: user = await selectUserByEmail(input.email);
    if (!user) {
      throw new Error("Usuário não existe.");
    }
    const checkPassword: boolean = await compare(input.password, user.password);
    if (!checkPassword) {
      throw new Error("Sua senha está incorreta.");
    }
    const token: string = generateToken({ id: user.id, role: user.role });
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};
