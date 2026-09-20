import { setIn } from "formik"
import { useRef,useState } from "react"

export function UseReference(){
    
    const [value, setValue] = useState("")
    const inputRef = useRef(null)
    
    return(
        <div className="p-4 border border-2 ">
            <input type="text" className="form-control w-25" name="username" ref={inputRef} onChange={()=>setValue(inputRef.current.value)}/>
            <div>{value}</div>
        </div>
    )
}