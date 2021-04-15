import { AppError } from "../errors/AppError";
import { Post, PostInfo, PostInputDTO } from "../models/Post";
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
      if (
        !input.photo ||
        !input.type ||
        !input.description ||
        input.description.trim() === ""
      ) {
        throw new AppError(
          "You need to provide a photo, type and description",
          406
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

  public getPostByIdBusiness = async (id: string) => {
    try {
      const result = await postDatabase.selectPostById(id);
      const post: PostInfo = {
        id: result.id,
        photo: result.photo,
        description: result.description,
        type: result.description,
        createdAt: dayjs(result.created_at).format("DD/MM/YYYY"),
        authorId: result.author_id,
      };
      return post;
    } catch (error) {
      throw new Error(error.message || error.sqlMessage);
    }
  };
}

export default new PostBusiness();
