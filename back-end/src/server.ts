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
      checked: false
    },
  });
  return res.json("Usuário criado com sucesso");
});

app.get("/todos", async (req, res) => {
  const todos = await prisma.todo.findMany({});

  return res.json({ todos });
});
app.get("/todos/:id", async (req, res) => {
  const { id } = req.params
  const todo = await prisma.todo.findUnique({ where: { id } })
  return res.json({ todo })
}),

app.patch('/todos/:id', async (req, res) => {
  const { checked } = req.body
  const { id } = req.params

  res.setHeader('Content-Type', 'application/json')

  await prisma.todo.update({
    where: {
      id: id
    },
    data: {
      checked: checked
    }
  })
  return { res }
})

app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333");
});
