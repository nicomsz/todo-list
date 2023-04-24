'use client'

import { HandleTodo } from './HandleTodo'
import DateTime from './DateTime'
import { TodoCheck } from './TodoCheck'
import { TodoProps } from '../page'
export default function TodoList({ todos }: TodoProps) {
  return (
    <>
      <div className="flex items-center h-screen px-8 ">
        <div className="bg-white h-[600px] w-[320px] mx-auto rounded-lg p-8 flex flex-col">
          <DateTime />
          {todos.map((todo) => {
            return (
              <li className="pt-5 list-none flex b" key={todo.name}>
                <p>{todo.name} </p>
                <div className="flex-grow" />
                <TodoCheck id={todo.id} checked={todo.checked} />
              </li>
            )
          })}
          <div className="flex justify-center mt-auto w-full -mr-16">
            <HandleTodo />
          </div>
        </div>
      </div>
    </>
  )
}
