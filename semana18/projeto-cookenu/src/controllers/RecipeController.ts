import dayjs from "dayjs";
import { Request, Response } from "express";
import { insertRecipe } from "../models/insertRecipe";
import { selectUserById } from "../models/selectUserById";
import { getTokenData } from "../services/authenticator";
import { generateId } from "../services/generateId";
import { AuthenticationData, NewRecipe } from "../types";

class RecipeController {
  async create(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const { title, description } = req.body;
      const id = generateId();
      const token = req.headers.authorization as string;
      const authenticationData: AuthenticationData = getTokenData(token);
      if (!token || !authenticationData) {
        errorCode = 406;
        throw new Error("Token inválido!");
      }
      const user = await selectUserById(authenticationData.id);
      if (!user) {
        errorCode = 422;
        throw new Error("Usuário inexistente.");
      }
      if (!title) {
        errorCode = 422;
        throw new Error("Por favor insira um título.");
      }
      const newRecipe: NewRecipe = {
        id: id,
        title: title,
        description: description,
        created_at: dayjs().format("YYYY-MM-DD"),
        userCreator_id: user.id,
      };
      await insertRecipe(newRecipe);
      res.status(201).send({ message: "Receita criada." });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { RecipeController };
