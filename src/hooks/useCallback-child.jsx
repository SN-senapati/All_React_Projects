import React, { memo } from "react"
export const UseCallBackChild = React.memo(({sayHello})=>{
    console.log("This is child")
    return(
        <div className="p-4 border border-1 text-bg-dark">
            <h2>usecallback child</h2>
            <button className="btn btn-primary" onClick={sayHello}>Child</button>
        </div>
    )
})