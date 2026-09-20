import axios from "axios";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";

export function useFetchApi(url){
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get(url)
        .then((res)=>
            setData(res.data)
        )
    },[url])
    return data
}