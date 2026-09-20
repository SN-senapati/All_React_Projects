import { useEffect, useState } from "react"
import { UseEffectTimer } from "./useEffect-timer"

export function UseEffectTimerMain(){
    const [show, setShow] = useState(true)
    return(
        <div className="p-4">
            <h3>Start Timer</h3>
            <button className="btn btn-outline-dark" onClick={()=>{setShow(!show)}}>{show ? "Unmount" : "mount"}</button>
            {
                show && <UseEffectTimer/>
            }
        </div>
    )
}