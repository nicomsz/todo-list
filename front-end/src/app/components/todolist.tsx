"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import DateTime from "./DateTime";
import Image from "next/image";
import usePatch from "../hooks/usePatch";
export const TodoList = () => {
  type Todo = {
    id: string,
    checked: boolean;
  }
  const { data: todos } = useFetch();
  const [data, setData]  = useState<Todo>()
  const [error, setError] = useState(false)



  function HandleCheckedChange (id: string, checked: boolean)  {
    switch (checked) {
      case true: checked = false
      case false: checked = true
    }
      const url = `http://localhost:3333/todos/${id}`;
      const body = JSON.stringify({
        checked
      })
       
          axios
            .patch(url, { data: body })
    
            .then((response) => {
             
              setData(response.data.todos);
            })
    
            .catch((error) => {
              setError(true);
              console.log(error)
            })
            
       
  
      return { data, error };
    
  };
 
 

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
                 <button className= "rounded-full content-end align-bottom" onClick={() => HandleCheckedChange(todo.id, todo.checked)} >      
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
