import "./mouse-demo.css"
import { useState } from "react";
export function MouseDemo(){
    const [animation,setAnimation] = useState({animation:"spin",animationDuration:"5s",animationIterationCount:"4",animationTimingFunction:"linear"});
    function handleMouseDown(){
        setAnimation({animation:"spin",animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"})
    }
    function handleMouseUp(){
        setAnimation({animation:"spin",animationDuration:"5s",animationIterationCount:"4",animationTimingFunction:"linear"})
    }
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
            <img src="../src/assets/react.svg" alt="" width={200} style={animation} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}/>
        </div>
    )
}