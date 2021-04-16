import friendshipDatabase from "../database/friendshipDatabase";
import UserDatabase from "../database/userDatabase";
import { AppError } from "../errors/AppError";
import { FriendDTO, MakeFriend } from "../models/Friend";
import { LoginInputDTO, SignUpInputDTO, User } from "../models/User";
import authenticator, { AuthenticationData } from "../services/authenticator";
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
        throw new AppError("Please provide an name, email and password", 406);
      }
      if (!input.email.includes("@")) {
        throw new AppError("Invalid email", 422);
      }
      if (input.password.length < 6) {
        throw new AppError(
          "Invalid password, insert more than 6 characters.",
          422
        );
      }
      const id = idGenerator.generateId();
      const hashPassword = await HashManager.generateHash(input.password);
      const newUser: User = new User(id, input.name, input.email, hashPassword);
      await UserDatabase.insertUser(newUser);
      const token = authenticator.generateToken({ id });
      return token;
    } catch (error) {
      throw new AppError(error.message || error.sqlMessage, error.statusCode);
    }
  };

  public loginBusiness = async (input: LoginInputDTO) => {
    try {
      if (
        !input.email ||
        !input.password ||
        input.email.trim() === "" ||
        input.password.trim() === ""
      ) {
        throw new AppError(
          "Please provide an email and password to login.",
          406
        );
      }
      const result: User = await UserDatabase.selectUserByEmail(input.email);
      const password = result.getPassword();
      const checkPassword = await HashManager.compareHash(
        input.password,
        password
      );
      if (!checkPassword) {
        throw new AppError("Invalid password!", 404);
      }
      const id = result.getId();
      const token = authenticator.generateToken({ id });
      return token;
    } catch (error) {
      throw new AppError(error.message || error.sqlMessage, error.statusCode);
    }
  };

  public makeFriendBusiness = async (input: FriendDTO) => {
    try {
      const authenticationData: AuthenticationData = authenticator.getTokenData(
        input.token
      );
      if (!input.token || !authenticationData) {
        throw new AppError("You need to provide a valid token!", 406);
      }
      if (!input.resFriend_id || input.resFriend_id.trim() === "") {
        throw new AppError("User to follow doens't exist", 404);
      }
      const params = {
        reqFriend_id: authenticationData.id,
        resFriend_id: input.resFriend_id,
      };
      await friendshipDatabase.makeFriend(params);
    } catch (error) {
      throw new AppError(error.message || error.sqlMessage, error.statusCode);
    }
  };
}

export default new UserBusiness();
