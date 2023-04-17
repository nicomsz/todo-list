import express from "express";
import cors from "cors";
import dayjs from "dayjs";
import { prisma } from "./services/prisma";
const app = express();

app.use(cors());
app.use(express.json());

app.post("/todo", async (req, res) => {
  const { name, description } = req.body;
  const today = dayjs().startOf("day").toDate();
  await prisma.todo.create({
    data: {
      name: name,
      description: description,
      date: today,
    },
  });
  return res.json("Usuário criado com sucesso");
});

app.get("/todos", async (req, res) => {
  const todos = await prisma.todo.findMany({});

  return res.json({ todos });
});

app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333");
});
