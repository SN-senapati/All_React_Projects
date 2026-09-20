import { useEffect, useState } from "react"
export function UseEffect(){
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log("component mounted")
        console.log("Effect")
        return ()=>{
            console.log("component unmount")
        }
    },[count])
    return(
        <div className="p-4 ">
            <span className="me-2 border border-2 p-1">{count}</span>
            <button className="btn btn-outline-dark" onClick={()=>{setCount(count+1)}}>Click me</button>
        </div>
    )
}