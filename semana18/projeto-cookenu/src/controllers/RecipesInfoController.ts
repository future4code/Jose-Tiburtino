import dayjs from "dayjs";
import { Request, Response } from "express";
import { selectRecipesFeed } from "../models/selectRecipesFeed";
import { selectUserById } from "../models/selectUserById";
import { getTokenData } from "../services/authenticator";
import { Recipe } from "../types";

class RecipesInfoController {
  async show(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const token = req.headers.authorization as string;
      getTokenData(token);
      if (!token || !getTokenData) {
        errorCode = 406;
        throw new Error("Token inválido!");
      }
      const result = await selectRecipesFeed();
      if (!result) {
        errorCode = 404;
        throw new Error("Não existe nenhuma receita.");
      }
      const recipes = result.map((items: Recipe) => {
        return {
          id: items.id,
          title: items.title,
          description: items.description,
          createdAt: dayjs(items.created_at).format("DD/MM/YYYY"),
          userId: items.userCreator_id,
        };
      });
      res.status(200).send({ recipes: recipes });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { RecipesInfoController };
