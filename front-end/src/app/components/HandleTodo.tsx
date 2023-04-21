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
      <input value={inputValue} onChange={handleInputChange}></input>
      <div>
        <button onClick={HandleAddTodo}>
          <Image src={addSVG} alt="Add button" width={100} height={100} />
        </button>
      </div>
    </>
  )
}
