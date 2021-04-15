import { Request, Response } from "express";
import postBusiness from "../business/postBusiness";
import { PostInputDTO } from "../models/Post";

class PostController {
  public createPost = async (req: Request, res: Response) => {
    try {
      const { photo, description, type } = req.body;
      const token: string = req.headers.authorization as string;
      const post: PostInputDTO = { token, photo, description, type };
      await postBusiness.createPostBusiness(post);
      res.status(201).send({ message: "Post created." });
    } catch (error) {
      res.status(error.statusCode).send({ message: error.message });
    }
  };

  public getPostById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const post = await postBusiness.getPostByIdBusiness(id);
      res.status(200).send({ Post: post });
    } catch (error) {
      res.status(error.statusCode).send({ message: error.message });
    }
  };
}

export { PostController };
