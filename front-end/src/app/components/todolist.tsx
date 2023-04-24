'use client'

import { HandleTodo } from './HandleTodo'
import DateTime from './DateTime'
import { TodoCheck } from './TodoCheck'
import { TodoProps } from '../page'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function TodoList({ todos }: TodoProps) {
  type Todo = {
    id: string
    name: string
    checked: boolean
  }
  const [data, setData] = useState<Todo[]>([])
  const [error, setError] = useState(false)
  const url = 'http://localhost:3333/todos'

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then((response) => {
          setData(response.data.todos)
        })
        .catch((err) => {
          setError(err)
          console.log(error)
        })
        .finally(() => {})
    }, 2000)
  })
  console.log(data.length)
  return (
    <>
      <div className="flex items-center h-screen px-8 ">
        <div className="bg-white h-[600px] w-[320px] mx-auto rounded-lg p-8 flex flex-col">
          <DateTime />
          {data.map((todo) => {
            return (
              <li className="pt-5 list-none flex b" key={todo.id}>
                <p>{todo.name} </p>
                <div className="flex-grow" />
                <TodoCheck id={todo.id} checked={todo.checked} />
              </li>
            )
          })}
          <div className="flex justify-center mt-auto w-full -mr-16 p-4">
            <HandleTodo />
          </div>
          <p className="text-sm text-center content-center pt-6">
            O limite de Todos cadastrados são 7.
          </p>
        </div>
      </div>
    </>
  )
}
