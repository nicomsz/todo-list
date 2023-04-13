import { PrismaClient } from '@prisma/client'
import { Dayjs } from 'dayjs';
const express = require('express')
const app = express();



app.post('http://localhost:3333', async( req ) => {
        const prisma = new PrismaClient();
        const { name, description, date } = req.body
        const today = new Dayjs().startOf('day').toDate()
        await prisma.todo.create({
            data: {
                name: name,
                description: description,
                date: today
            }
        })
}   )
