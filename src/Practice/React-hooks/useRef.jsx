import { useRef, useState } from "react"

export function UseRef(){
    
    const username = useRef(null)
    function handleSubmit(e){
        e.preventDefault()
        console.log(username.current.value)
    }

   return(
        <div className="p-4">
            <h3>Use Reference</h3>
            {/* <input type="text" className="form-control mb-2 w-25" ref={inputRef}/>
            <button className="btn btn-outline-dark" onClick={()=>{inputRef.current.focus()}}>focus</button> */}
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="username" ref={username} className="form-control w-25"/>
                <button type="submit" className="btn btn-outline-dark">submit</button>
            </form>
        </div>
   )
}