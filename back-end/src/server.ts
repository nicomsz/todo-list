import express from "express";
import cors from "cors";
import dayjs from "dayjs";
import { prisma } from "./services/prisma";
const app = express();

app.use(cors());
app.use(express.json());

app.post("/todo", async (req, res) => {
  const { name } = req.body;
  const today = dayjs().startOf("day").toDate();
  res.setHeader('Content-Type', 'application/json');

  const todo = await prisma.todo.create({
    data: {
      name: name,
      date: today,
      checked: false
    },
  });
  console.log('Todo here:' + todo)
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
});

app.patch('/todos/:id', async (req, res) => {
  const { id } = req.params
  const todo = await prisma.todo.findUnique({ where: { id }})
  const checked = todo?.checked
  await prisma.todo.update({
    where: {
      id: id
    },
    data: {
      checked: !checked
    }
  });
 })

 app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params
  
  await prisma.todo.delete({
    where: {
      id: id
    }
  })
  return res.status(200).json({
    "message": "User deleted successfully"
  })
});

  

app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333");
});
