import { Request, Response } from "express";
import { deleteUserById } from "../data/deleteUserById";
import { getTokenData } from "../services/auth";

export const deleteUser = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { id } = req.params;
    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);
    if (authenticationData.role !== "ADMIN") {
      errorCode = 401;
      throw new Error("Only a admin user can access this funcionality");
    }
    await deleteUserById(id);
    res.status(200).send({ message: "User deleted." });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
