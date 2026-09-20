import { useState } from "react";
import { useRef } from "react";
export function DebounceDemo(){
    
    const [msg, setMsg] = useState("")
    const thread = useRef(null)
    function level1(){
        setMsg("Volumn increase to 30%")
    }
    function level2(){
        setMsg("Volumn increase to 70%")
    }
    function level3(){
        setMsg("Volumn Full....")
    }
    
    function volumnUp(){
        setTimeout(level1, 2000)
        thread.current = setTimeout(level2, 4000)
        setTimeout(level3, 6000)
        console.log(thread.current)
    }

    function cancelThread(){
        clearTimeout(thread.current)
        console.log(thread.current)
    }
    return(
        <div className="p-4">
            <button className="btn btn-primary bi bi-volume-up" onClick={volumnUp}></button>
            <button className="btn btn-warning ms-2" onClick={cancelThread}>Cancel level2</button>
            <p className="fs-3 fw-bold">{msg}</p>
        </div>
    )
}