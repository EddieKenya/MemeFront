import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const[pending, Ispending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
     const abortCont =  new AbortController();
    fetch(url, {signal: abortCont.signal})
        .then(res =>{
            return res.json()
        })
        .then(data=>{
        setData(data)
        Ispending(false)
        })
        .catch (err =>{
            if (err.name === 'AbortError') {
                console.log ('fetch aborted')
                
            } else{

                setError(err.message);
                Ispending(false)
            }
        })
        return() => abortCont.abort();
    },[url]);

    return {data, pending, error}
}
 
export default useFetch;