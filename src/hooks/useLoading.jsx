import { useEffect, useState } from "react";

function useLoading(data) {
    const [isPending, setIsPending] = useState(true);
    useEffect(()=>{
      if(data){
        setIsPending(false)
      }
    }, [])
  return isPending
}

export default useLoading