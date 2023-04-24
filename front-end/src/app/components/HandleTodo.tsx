import Image from 'next/image'
import addSVG from '../../../public/images/add-circle.svg'
import axios from 'axios'
import { useState } from 'react'

type Todo = {
  id: string
  name: string
  checked: boolean
}
export function HandleTodo() {
  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState<Todo[]>([])
  const [error, setError] = useState(false)
  const url = 'http://localhost:3333/todos'
  const todosLimitReached = data.length >= 7

  axios
    .get(url)
    .then((response) => {
      setData(response.data.todos)
    })
    .catch((err) => {
      setError(err)
      console.log(error)
    })
  function HandleAddTodo() {
    console.log(data.length)
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
    axios.post('http://localhost:3333/todo', body, {
      headers: config.headers,
    })
    setInputValue('')
  }
  function handleInputChange(event: any) {
    setInputValue(event.target.value)
  }

  return (
    <>
      <input
        value={inputValue}
        placeholder="Insira nome do Todo"
        onChange={handleInputChange}
        className="border text-sm rounded shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none focus:border-b-2 h-[48px] m-2 "
      />
      <div className="flex-grow"></div>
      {todosLimitReached ? (
        <div className="px-4">Limite atingido.</div>
      ) : (
        <button
          onClick={HandleAddTodo}
          className="h-[60px] disabled:bg-green-50 rounded-full"
        >
          <Image src={addSVG} alt="Add button" width={60} height={60} />
        </button>
      )}
    </>
  )
}
