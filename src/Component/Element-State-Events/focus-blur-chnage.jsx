import { useState } from "react"
export function FocusDemo(){
    const [value, setValue] = useState("")
    const [tip, setTip] = useState("")
    function handleChange(e){
        setValue(e.target.value)
    }

    function handleBlur(){
        setValue(value.toUpperCase())
        setTip("")
    }

    function handleFocus(){
        setTip("eg : IFSC - SBIN0022562")
    }
    
    return (
        <div className="p-4 w-25">
            <input type="text" className="form-control" onChange={handleChange} onBlur={handleBlur} value={value} onFocus={handleFocus}/>
            <p className="text-warning mt-2">{tip}</p>
        </div>
    )
}