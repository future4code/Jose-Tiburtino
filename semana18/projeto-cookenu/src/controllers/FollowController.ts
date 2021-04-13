import { Request, Response } from "express";
import { insertFollowUser } from "../models/insertFollowUser";
import { selectUserById } from "../models/selectUserById";
import { getTokenData } from "../services/authenticator";
import { AuthenticationData, Follow } from "../types";

class FollowController {
  async execute(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const userToFollowId = req.body.userToFollowId as string;
      if (!userToFollowId) {
        errorCode = 422;
        throw new Error("Há parâmetros faltando.");
      }
      const token = req.headers.authorization as string;
      const authenticationData: AuthenticationData = getTokenData(token);
      if (!token || !authenticationData) {
        errorCode = 406;
        throw new Error("Token inválido!");
      }
      const follower = await selectUserById(authenticationData.id);
      const following = await selectUserById(userToFollowId);
      if (!follower || !following) {
        errorCode = 404;
        throw new Error("Usuário não existe.");
      }
      if (follower.id === req.body.userToFollowId) {
        errorCode = 422;
        throw new Error("Não é possivel seguir a si mesmo!");
      }
      const newFollow: Follow = {
        follower_id: authenticationData.id,
        following_id: userToFollowId,
      };
      await insertFollowUser(newFollow);
      res.status(200).send({ message: "Usuário seguido!" });
    } catch (error) {
      if (errorCode === 200) {
        res.status(500).send({ message: "Internal server error" });
      } else {
        res.send({ message: error.message });
      }
    }
  }
}

export { FollowController };
