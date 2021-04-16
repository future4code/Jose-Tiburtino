import { AppError } from "../errors/AppError";
import { Post, PostById, PostInfo, PostInputDTO } from "../models/Post";
import idGenerator from "../services/generateId";
import authenticator, { AuthenticationData } from "../services/authenticator";
import dayjs from "dayjs";
import postDatabase from "../database/postDatabase";

class PostBusiness {
  public createPostBusiness = async (input: PostInputDTO) => {
    try {
      const authenticationData: AuthenticationData = authenticator.getTokenData(
        input.token
      );
      if (!input.token || !authenticationData) {
        throw new AppError("Invalid token", 406);
      }
      if (
        !input.photo ||
        !input.type ||
        !input.description ||
        input.description.trim() === ""
      ) {
        throw new AppError(
          "You need to provide a photo, type and description",
          422
        );
      }
      const id = idGenerator.generateId();
      const newPost: Post = new Post(
        id,
        input.photo,
        input.description,
        input.type,
        dayjs().format("YYYY-MM-DD"),
        authenticationData.id
      );
      await postDatabase.insertPost(newPost);
    } catch (error) {
      throw new AppError(error.message || error.sqlMessage, error.statusCode);
    }
  };

  public getPostByIdBusiness = async (input: PostById) => {
    try {
      const authenticationData: AuthenticationData = authenticator.getTokenData(
        input.token
      );
      if (!input.token || !authenticationData) {
        throw new AppError("You need to provide a valid token!", 406);
      }
      const result = await postDatabase.selectPostById(input.id);
      if (!result) {
        throw new AppError("Post doesn't exist", 404);
      }
      const post: PostInfo = {
        id: result.id,
        photo: result.photo,
        description: result.description,
        type: result.description,
        createdAt: dayjs(result.created_at).format("DD/MM/YYYY"),
        authorId: authenticationData.id,
      };
      return post;
    } catch (error) {
      throw new AppError(error.message || error.sqlMessage, error.statusCode);
    }
  };
}

export default new PostBusiness();
