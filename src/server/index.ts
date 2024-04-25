import express, { Express, Request, Response } from "express";
import { config } from "./config";

const app: Express = express();

app.get("*", (req: Request, res: Response) => {
  res.send(`<h1>Hello World from: ${req.url}</h1>`);
});

app.listen(config.PORT, () => {
  console.log(`Listening in http://localhost:${config.PORT}`);
});