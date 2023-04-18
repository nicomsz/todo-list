import axios from "axios";
import { useEffect, useState } from "react";

const url = "http://localhost:3333/todos";

type Todo = {
  id: string
  name: string;
  description: string;
  checked: boolean;
};

export default function useFetch() {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState<Todo[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {

      axios
        .get(url)
        .then((response) => {
          setData(response.data.todos);
          setIsFetching(true);
        })
        .catch((error) => {
          setError(true);
        })
        .finally(() => {
          setIsFetching(false);
        });
    },2500);
    })

  return { data, isFetching, error };
}
