import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
export function Throttle(){
    const [date, setDate] = useState(new Date())

    function clock(){
        setDate(new Date())
    }

    let thread = useRef(null)

    function stopClick(){
        clearInterval(thread.current)
        thread.current = null
        console.log(thread.current)
    }

    function startClick(){
        if(!thread.current){
            thread.current = setInterval(clock, 1000)
        }
    }

    useEffect(()=>{

       thread.current = setInterval(clock, 1000)
       return ()=>{
        clearInterval(thread.current)
       }
    },[])
    return (
        <div className="p-4">
            <div className="fs-2 fw-bold">{date.toLocaleTimeString()}</div>
            <div className="btn-group mt-2">
                <button className="btn btn-outline-danger"  onClick={startClick}>Start</button>
                <button className="btn btn-outline-danger" onClick={stopClick}>Stop</button>
                <button className="btn btn-outline-danger">Resume</button>
            </div>
        </div>
    )
}