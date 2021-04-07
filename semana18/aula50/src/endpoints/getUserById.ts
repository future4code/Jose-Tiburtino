import { Request, Response } from "express";
import { getTokenData } from "../data/auth";
import { selectUserById } from "../data/selectUserById";

export const getUserById = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);
    const user = await selectUserById(authenticationData.id);
    if (!user) {
      throw new Error("Usuário inexistente.");
    }
    res.status(200).send({
      message: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
