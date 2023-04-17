"use client";

import useFetch from "../hooks/useFetch";

export const TodoList = () => {
  const { data: todos } = useFetch();
 

  return (
    <>
      <div className="flex items-center h-screen">
        <div className="bg-white h-[32rem] w-[24rem] mx-auto rounded-lg">
           {todos?.map((todo) => {
            return <li key={todo.name}> {todo.name} </li>;
          })} 
        </div>
      </div>
    </>
  );
}
