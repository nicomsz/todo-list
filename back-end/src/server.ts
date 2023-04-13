import express from 'express'
import dayjs from 'dayjs';
import { prisma } from './services/prisma';
import bodyParser from 'body-parser';
const app = express()


app.use(bodyParser.json())
 
app.post('/todo', async( req, res ) => {

    const { name, description } = req.body
    const today = dayjs().startOf('day').toDate()
    await prisma.todo.create({
        data: {
            name: name,
            description: description,
            date: today
        }
    })
    return res.json({ name, description }) 
})

app.listen(3333, () => { console.log('Servidor rodando na porta 3333')})