import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Session } from "./entity/Session";
import * as express from "express";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
app.use(express.json());

app.get("/sessions", async function (req: Request, res: Response) {
  const sessions = await AppDataSource.getRepository(Session).find()
  res.json(sessions)
})

app.get("/sessions/:id", async function (req: Request, res: Response) {
  const id = Number(req.params.id);
  const results = await AppDataSource.getRepository(Session).findOneBy({
      id: id
  })
  return res.send(results)
})

app.post("/sessions", async function (req: Request, res: Response) {
  const sessions = await AppDataSource.getRepository(Session).create(req.body)
  const results = await AppDataSource.getRepository(Session).save(sessions)
  return res.send(results)
})

app.put("/sessions/:id", async function (req: Request, res: Response) {
  const id = Number(req.params.id);
  const session = await AppDataSource.getRepository(Session).findOneBy({
      id: id,
  })
  AppDataSource.getRepository(Session).merge(session, req.body)
  const results = await AppDataSource.getRepository(Session).save(session)
  return res.send(results)
})

app.delete("/sessions/:id", async function (req: Request, res: Response) {
  const results = await AppDataSource.getRepository(Session).delete(req.params.id)
  return res.send(results)
})

app.listen(3000)


