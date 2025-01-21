import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

function useGetFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + auth.accessToken,
              },
        });
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setIsPending(false);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
        setIsPending(false);
      }
    };
    fetchData();
    
  }, [url]);

  return { data, isPending, error };
}

export default useGetFetch;
