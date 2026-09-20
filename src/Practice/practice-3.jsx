import { useState } from "react"
export function ElementStateEvent(){
    const [msg, setMsg] = useState("")
    const [color, setColor] = useState("")
    function handleBlur(){
        setMsg("")
    }
    function handleFocus(){
        setMsg("eg: SBIN003325743")
        setColor("text-warning")
    }
    function handleChange(e){
        console.log(e.target.value)
    }
    return(
        <>
            <div className="container-fluid p-4">
                <label htmlFor="" className="form-label">Element State Event</label>
                <input type="text" className="form-control w-25" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
                <div className={color}>{msg}</div>
            </div>
        </>
    )
}