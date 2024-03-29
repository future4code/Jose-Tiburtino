import { Request, Response } from "express";
import app from "./app";
import {
  getActorById,
  getActorByName,
  countActors,
} from "./endpoints/getActor";
import { createMovie, getMovies, searchMovies } from "./endpoints/getMovie";
import {
  updateSalary,
  deleteActor,
  averageSalary,
} from "./endpoints/updateActor";

app.get("/actor/:id", async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const result = await getActorById(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/actor/", async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const name: string = req.query.name as string;
    const result = await getActorByName(name);
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/actor", async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const gender: string = req.query.gender as string;
    const result = await countActors(gender);
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.put("/actor/update", async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { id, newSalary } = req.body;
    updateSalary(id, newSalary);
    res.status(201).send("Salário atualizado!");
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.delete("/actor/delete/:id", async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    deleteActor(req.params.id as string);
    res.status(200).send("Usuário deletado.");
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.get(
  "/actor/average/salary/:gender",
  async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
      const gender: string = req.params.gender as string;
      const result = await averageSalary(gender);
      res.status(200).send(result);
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
);

app.post("/movie/create", async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    await createMovie(
      req.body.id,
      req.body.title,
      req.body.synopsis,
      req.body.releaseDate,
      req.body.playingLimitDate,
      req.body.rating
    );
    res.status(200).send("Filme criado!");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/movie/all", async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const result = await getMovies();
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/movie/search", async (req: Request, res: Response) => {
  let errorCode: number = 400;
  const query: string = req.query.query as string;
  try {
    const result = await searchMovies(query);
    res.status(200).send({ movies: result });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});
