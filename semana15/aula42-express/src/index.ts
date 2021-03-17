import express, { Express, Request, Response } from "express";
import cors from "cors";
import { countries, country } from "./countries";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/countries/all", (req: Request, res: Response) => {
  const result = countries.map((country) => ({
    id: country.id,
    name: country.name,
  }));
  res.status(201).send(result);
});

app.get("/countries/search", (req: Request, res: Response) => {
  let result: country[] = countries;
  try {
    if (!req.query.name && !req.query.capital && !req.query.continent) {
      throw new Error("Invalid Parameters");
    }
    if (req.query.name) {
      result = result.filter((country) =>
        country.name.includes(req.query.name as string)
      );
    }

    if (req.query.capital) {
      result = result.filter((country) =>
        country.capital.includes(req.query.capital as string)
      );
    }

    if (req.query.continent) {
      result = result.filter((country) =>
        country.continent.includes(req.query.continent as string)
      );
    }
  } catch (error) {
    res.status(400).send(error.message);
  }

  res.status(200).send(result);
});

app.put("/countries/edit/:id", (req: Request, res: Response) => {
  const result = countries.findIndex(
    (country) => country.id === Number(req.params.id)
  );
  countries[result].name = req.body.name;
  countries[result].capital = req.body.capital;

  if (result) {
    res.status(200).send("Alterado!");
  } else {
    res.status(404).send("Não alterado!");
  }
});

app.get("/countries/:id", (req: Request, res: Response) => {
  const result: country | undefined = countries.find(
    (country) => country.id === Number(req.params.id)
  );

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send("Id não encontrado");
  }
});

app.delete("/countries/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    if (isNaN(Number(req.params.id))) {
      throw new Error("Invalid id type. Please send a number");
    }

    if (
      typeof req.headers.authorization !== "string" ||
      req.headers.authorization.length < 10
    ) {
      errorCode = 401;
      throw new Error("Invalid authorization.");
    }

    const countryIndex: number = countries.findIndex((country) => {
      return country.id === Number(req.params.id);
    });

    if (countryIndex < 0) {
      errorCode = 404;
      throw new Error("Country not found.");
    }

    countries.splice(countryIndex, 1);

    res.status(200).send("Country deleted sucessfully.");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.listen(3333, () => console.log("Server is running."));
