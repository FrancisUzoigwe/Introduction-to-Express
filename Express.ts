import express, { Application } from "express";

const port: number = 2002;
const app: Application = express();

app.use(express.json());

app.listen(port, () => {
  console.log("listening on port " + port);
});
