"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import DateTime from "./DateTime";
import Image from "next/image";
import usePatch from "../hooks/usePatch";
export const TodoList = () => {
  const { data: todos } = useFetch();
  const [TodoId, setTodoId]  = useState('')
  const [TodoCheck, setTodoCheck] = useState(false)



  function HandleCheckedChange (id: string, checked: boolean)  {
    switch (checked) {
      case true: checked = false
      case false: checked = true
    }
  };
  usePatch(id, checked)
 

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
                 <button className= "rounded-full content-end align-bottom" onClick={() => setTodoId(todo.id) && setTodoCheck(todo.checked)} >      
                    {todo.checked ? (<Image src='./images/icons8-checkmark.svg' alt='SVG' width={25} height={25} />) :                      
                    (<Image src='./images/unchecked.svg' alt='Unchecked' width={25} height={25} />)}                       

                 </button>

              </li>  
             )
          })}
        </div>
      </div>
    </>
  );
}
