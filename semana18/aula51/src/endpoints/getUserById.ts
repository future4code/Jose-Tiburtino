import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";
import { getTokenData } from "../services/auth";

export const getUserById = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);
    if (authenticationData.role !== "NORMAL") {
      errorCode = 401;
      throw new Error("Only a normal user can access this funcionality");
    }
    const user = await selectUserById(authenticationData.id);
    if (!user) {
      throw new Error("Usuário inexistente.");
    }
    res.status(200).send({
      message: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
