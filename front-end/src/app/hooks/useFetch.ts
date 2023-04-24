import axios from 'axios'
import { useState } from 'react'

const url = 'http://localhost:3333/todos'

type Todo = {
  id: string
  name: string
  checked: boolean
}

export default function useFetch() {
  const [isFetching, setIsFetching] = useState(true)
  const [data, setData] = useState<Todo[]>([])
  const [error, setError] = useState(false)

  axios
    .get(url)
    .then((response) => {
      setData(response.data.todos)
      setIsFetching(true)
    })
    .catch((error) => {
      setError(error)
    })
    .finally(() => {
      setIsFetching(false)
    })

  return { data, isFetching, error }
}
