import axios from "axios"
import { useEffect, useState } from "react"

export default function useFetch<T = unknown>(url: string) {
    const [isFetching, setIsFetching] = useState(true)
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState(false)
    useEffect(() => {
    
            axios.get('https://api.github.com/' + url)
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
        
        
        return { data, isFetching, error }
    
    }