import { removeUser } from "../data/userDatabase";
import { AuthenticationData, DeleteInput } from "../models/user";
import { getTokenData } from "../services/authenticator";

export const removeUserBusiness = async (input: DeleteInput) => {
  try {
    const token: AuthenticationData = getTokenData(input.token);
    if (token.role !== "ADMIN") {
      throw new Error("Somente ADMINS podem deletar.");
    }
    await removeUser(input.id);
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
