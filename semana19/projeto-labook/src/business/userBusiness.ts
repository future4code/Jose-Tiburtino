import UserDatabase from "../database/userDatabase";
import { SignUpInputDTO, User } from "../models/User";
import authenticator from "../services/authenticator";
import idGenerator from "../services/generateId";
import HashManager from "../services/hashManager";

class UserBusiness {
  public signupBusiness = async (input: SignUpInputDTO) => {
    try {
      if (
        !input.name ||
        !input.email ||
        !input.password ||
        input.name.trim() === "" ||
        input.email.trim() === "" ||
        input.password.trim() === ""
      ) {
        throw new Error("Please provide an name, email and password");
      }
      if (!input.email.includes("@")) {
        throw new Error("Invalid email");
      }
      if (input.password.length < 6) {
        throw new Error("Invalid password, insert more than 6 characters.");
      }
      const id = idGenerator.generateId();
      const hashPassword = await HashManager.generateHash(input.password);
      const newUser: User = new User(id, input.name, input.email, hashPassword);
      await UserDatabase.insertUser(newUser);
      const token = authenticator.generateToken({ id });
      return token;
    } catch (error) {
      throw new Error(error.message || error.sqlMessage);
    }
  };
}

export default new UserBusiness();
