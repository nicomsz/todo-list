import Image from 'next/image'
import addSVG from '../../../public/images/add-circle.svg'
import axios from 'axios'
import { useState } from 'react'

export function HandleTodo() {
  const [inputValue, setInputValue] = useState('')
  function HandleAddTodo() {
    const body = JSON.stringify({
      name: inputValue,
    })
    const config = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      data: body,
    }
    console.log(body)
    axios.post('http://localhost:3333/todo', body, { headers: config.headers })
    setInputValue('')
  }
  function handleInputChange(event: any) {
    setInputValue(event.target.value)
  }
  return (
    <>
      <input
        value={inputValue}
        onChange={handleInputChange}
        className="border text-sm rounded shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none focus:border-b-2   "
      />
      <div className="flex-grow"></div>
      <button onClick={HandleAddTodo} className="h-[60px]">
        <Image src={addSVG} alt="Add button" width={60} height={60} />
      </button>
    </>
  )
}
