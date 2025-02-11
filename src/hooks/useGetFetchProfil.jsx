import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

function useGetFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const { auth, refresh, isTokenExpired } = useContext(AuthContext);

  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");
 
    const fetchData = async () => {
      setIsPending(true);
      try {
        let req = ""
        if(!(await isTokenExpired(refreshToken))){
          req = await fetch(url, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.accessToken,
            },
          });
        }

        if (req.status === 401) {
          await refresh(); // Access tokenni yangilash
          const retryReq = await fetch(url, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.accessToken, // Yangi token bilan
            },
          });

          if (!retryReq.ok) {
            throw new Error(retryReq.statusText);
          }
          const retryData = await retryReq.json();
          setData(retryData);
          
        } else if (!req.ok) {
          throw new Error(req.statusText);
        } else {
          const data = await req.json();
            setData(data);
        }

        setIsPending(false);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url, auth.accessToken]);

  return { data, isPending, error };
}

export default useGetFetch;
