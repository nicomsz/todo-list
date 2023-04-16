"use client"

import useFetch from "../hooks/useFetch";



export function TodoList() {
  
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Janeiro é 0
    const day = currentDate.getDate();
    const todos = useFetch()
    
    return (

    <>
    <div className="flex items-center h-screen">
        <div className="bg-white h-[32rem] w-[24rem] mx-auto rounded-lg">
            {todos?.map(todo => {
                return <li key={todo.name}> {todo.name} </li>
            })}
        </div>
    </div>
    </>

    )
}