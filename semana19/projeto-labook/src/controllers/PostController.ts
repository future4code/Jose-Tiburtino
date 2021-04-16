import { Request, Response } from "express";
import postBusiness from "../business/postBusiness";
import { PostById, PostInputDTO } from "../models/Post";

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
      const token: string = req.headers.authorization as string;
      const postInfo: PostById = { id, token };
      const post = await postBusiness.getPostByIdBusiness(postInfo);
      res.status(200).send({ Post: post });
    } catch (error) {
      res.status(error.statusCode).send({ message: error.message });
    }
  };

  public getAllPosts = async (req: Request, res: Response) => {
    try {
      const token: string = req.headers.authorization as string;
      const feed = await postBusiness.getAllPostsBusiness(token);
      res.status(200).send({ Feed: feed });
    } catch (error) {
      res.status(error.statusCode).send({ message: error.message });
    }
  };

  public like = async (req: Request, res: Response) => {
    try {
      const { post_id } = req.params;
      const token: string = req.headers.authorization as string;
      await postBusiness.postLike(token, post_id);
      res.sendStatus(200);
    } catch (error) {
      res.status(error.statusCode).send({ message: error.message });
    }
  };
}

export { PostController };
