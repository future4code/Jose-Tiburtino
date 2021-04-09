import dayjs from "dayjs";
import { Request, Response } from "express";
import { insertRecipe } from "../models/insertRecipe";
import { selectRecipeById } from "../models/selectRecipeById";
import { selectUserById } from "../models/selectUserById";
import { getTokenData } from "../services/authenticator";
import { generateId } from "../services/generateId";
import { AuthenticationData, Recipe } from "../types";

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
      const newRecipe: Recipe = {
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

  async show(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const { id } = req.params;
      if (!id) {
        errorCode = 422;
        throw new Error("O parâmetro ID está faltando.");
      }
      const token = req.headers.authorization as string;
      getTokenData(token);
      if (!token || !getTokenData) {
        errorCode = 406;
        throw new Error("Token inválido!");
      }
      const result = await selectRecipeById(id);
      if (!result) {
        errorCode = 404;
        throw new Error("Usuário não existe.");
      }
      const user = await selectUserById(result.userCreator_id);
      const recipe = {
        recipe_id: result.id,
        title: result.title,
        description: result.description,
        created_at: dayjs(result.created_at).format("DD/MM/YYYY"),
        created_by: user.name,
      };
      res.status(200).send({ Recipe: recipe });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { RecipeController };
