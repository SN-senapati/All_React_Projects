import { useEffect, useState } from "react"

export function UseEffectEx(){
    const [count, setCount] = useState(0)
    console.log("hello chinu")
    useEffect(()=>{
        console.log("hello chunia")
    },[count])
    console.log("hello sn senapati")
    return(
        <div className="p-4">
            <button className="btn btn-outline-dark" onClick={()=>{setCount(count+1)}}>click</button>
            <div style={{border:"2px solid red", height:"40px", width:"50px", marginTop:"2px"}}className="d-flex align-items-center justify-content-center">{count}</div>
        </div>
    )
}