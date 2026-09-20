import { useState } from "react"

export function UseStateEx(){
    const [value, setValue] = useState(0)
    return(
        <div className="p-4">
            <button className="btn btn-outline-dark" onClick={()=>{setValue(value+1)}}>click</button>
            <div style={{border:"2px solid red", height:"40px", width:"50px", marginTop:"2px"}}className="d-flex align-items-center justify-content-center">{value}</div>
        </div>
    )
}