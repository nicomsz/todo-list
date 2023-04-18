import axios from "axios";
import { useEffect, useState } from "react";




export default function usePatch(id: string, checked: boolean) {
  const url = `http://localhost:3333/todos/${id}`;
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      axios
        .patch(url, { checked, id} )

        .then((response) => {
          setData(response.data);
        })

        .catch((error) => {
          setError(true);
        })
        
    },2500);
    })

  return { data, error };
}
