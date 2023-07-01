import { useEffect, useState } from "react";

export default function useFetch(url){
    const [data,setData] = useState(null);
    useEffect(() => {
        const fetchData = async ()=>{
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        }
        fetchData();
    },[]);

    return (
        {data}
    )
}