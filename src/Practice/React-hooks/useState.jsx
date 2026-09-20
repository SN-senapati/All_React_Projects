import { useState } from "react"
export function UseState(){
    const [count, setCount] = useState(0)
    return(
        <div className="p-4 ">
            <span className="me-2 border border-2 p-1">{count}</span>
            <button className="btn btn-outline-dark" onClick={()=>{setCount(count+1)}}>Click me</button>
        </div>
    )
}