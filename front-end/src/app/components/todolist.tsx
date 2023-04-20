'use client'

import useFetch from '../hooks/useFetch'
import DateTime from './DateTime'
import Image from 'next/image'
import MyButton from './MyButton'

export const TodoList = () => {
  const { data: todos } = useFetch()

  return (
    <>
      <div className="flex items-center h-screen">
        <div className="bg-white h-[32rem] w-[24rem] mx-auto rounded-lg p-8">
          <DateTime />
          {todos?.map((todo) => {
            return (
              <li className="pt-5 list-none flex b" key={todo.name}>
                <p>{todo.name} </p>
                <div className="flex-grow" />
                <MyButton id={todo.id} checked={todo.checked} />
              </li>
            )
          })}
        </div>
        <div>
          <button>
            <Image
              src="./images/add-button.svg"
              alt="Add"
              width={25}
              height={25}
            />
          </button>
        </div>
      </div>
    </>
  )
}
