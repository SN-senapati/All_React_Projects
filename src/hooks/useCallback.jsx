import { useCallback, useEffect, useState } from "react"
import { UseCallBackChild } from "./useCallback-child"

export function UseCallback(){

    const [count, setCount] = useState(0)

    // function sayHello(){
    //     console.log("This is wrote inside the parent")
    // }

    const sayHello = useCallback(()=>{
        console.log("This is wrote inside the parent")
    },[])

    return(
        <div className="p-4 border border-1 bg-success">
            <h3>Use Callback Parent</h3>
            <button className="btn btn-outline-dark" onClick={()=>setCount(count+1)}>{count}</button>
            <UseCallBackChild sayHello={sayHello} />
        </div>  
    )
}