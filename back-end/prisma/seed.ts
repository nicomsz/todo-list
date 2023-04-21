import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const firstTodoId = "0730ffac-d039-4194-9571-01aa2aa0efbd";
const firstTodoName = 'Arrumar a cama'
const firstTodoDate = new Date("2022-12-31T03:00:00.000");

const secondTodoId = "00880d75-a933-4fef-94ab-e05744435297";
const secondTodoName = 'Lavar a louça'
const secondTodoDate = new Date("2023-01-03T03:00:00.000");

const thirdTodoId = "fa1a1bcf-3d87-4626-8c0d-d7fd1255ac00";
const thirdTodoName = 'Botar comida pro cachorro'
const thirdTodoDate = new Date("2023-01-07T03:00:00.000");

async function run() {
    await Promise.all([
        prisma.todo.create({
            data: {
                id: firstTodoId,
                name: firstTodoName,
                date: firstTodoDate,
                checked: false
                
                
                
            }
        }),
        prisma.todo.create({
            data:{
                id: secondTodoId,
                name: secondTodoName,
                date: secondTodoDate,
                checked: false
            }
        }),
        prisma.todo.create({
            data:{
                id: thirdTodoId,
                name: thirdTodoName,
                date: thirdTodoDate,
                checked: false
            }
        })
    ])
}
run()
.then( async () => {
    await prisma.$disconnect();
})
.catch( async(e) => {
    console.error(e)
    await prisma.$disconnect();
    process.exit(1)
})
