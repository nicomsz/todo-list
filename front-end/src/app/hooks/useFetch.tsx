


import axios from "axios"
import { useEffect, useState } from "react"

type Todo = {
    name: string;
    description: string;
    
}
export default function useFetch() {
    const url = 'http://localhost:3333/todo'
    const [isFetching, setIsFetching] = useState(true)
    const [data, setData] = useState<Todo | null>(null)
    const [error, setError] = useState(false) 
    
    useEffect(() => {
        
        axios.get(url)
        .then((response => {
            setData(response.data)
            setIsFetching(true)
            console.log(data)
        }))
        .catch((error) => {
            setError(true)
            })
            .finally(() => {
                setIsFetching(false)
            })
            
        }, [])
        const todos =  { data, isFetching, error }
      
        
        return JSON.parse({todos})
    
    }