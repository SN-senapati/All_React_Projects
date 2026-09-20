import { useState } from "react";
export function MouseMove(){

    const [move,setMove] = useState({})

    function handleMouseOver(e){
        setMove(
            {
                position:"fixed",
                top : e.clientY+ "px",
                left : e.clientX + "px"
            }
        )
    }
    return(
        <div className="p-4" onMouseMove={handleMouseOver}>
            <div style={{height:"100vh"}}>
                <h2>Mouse Move Example</h2>
            </div>
            <img src="../public/images/IND.png" alt="" width={30} style={move}/>
        </div>
    )
}