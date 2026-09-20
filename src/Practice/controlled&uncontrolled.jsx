import { useRef, useState } from "react"
export function ControlledComponent(){
    // const [value, setValue] = useState("")
    const input = useRef(null)
    
    function handleSubmit(){
        // setValue(e.target.value)
        console.log(input.current.value)
    }
    return(
        <div className="p-4">
            <label htmlFor="" className="form-label">Input</label>
            <input type="text" className="w-25 form-control" ref={input}/>
            <button onClick={handleSubmit} className="btn btn-outline-primary">Submit</button>
        </div>
    )
}