import { Request, Response } from "express";
import { removeFollow } from "../models/removeFollow";
import { selectUserById } from "../models/selectUserById";
import { getTokenData } from "../services/authenticator";
import { AuthenticationData, Follow } from "../types";

class UnfollowController {
  async execute(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const userToUnfollowId = req.body.userToUnfollowId as string;
      if (!userToUnfollowId) {
        errorCode = 422;
        throw new Error("Usuário não existe.");
      }
      const token = req.headers.authorization as string;
      const authenticationData: AuthenticationData = getTokenData(token);
      if (!token || !authenticationData) {
        errorCode = 406;
        throw new Error("Token inválido!");
      }
      const follower = await selectUserById(authenticationData.id);
      const following = await selectUserById(userToUnfollowId);
      if (!follower || !following) {
        errorCode = 404;
        throw new Error("Usuário não existe.");
      }
      const Unfollow: Follow = {
        follower_id: authenticationData.id,
        following_id: userToUnfollowId,
      };
      await removeFollow(Unfollow);
      res.status(200).send({ message: "Usuário não é mais seguido!" });
    } catch (error) {
      if (errorCode === 200) {
        res.status(500).send({ message: "Internal server error" });
      } else {
        res.send({ message: error.message });
      }
    }
  }
}

export { UnfollowController };
