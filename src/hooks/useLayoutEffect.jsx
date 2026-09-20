import { useEffect, useLayoutEffect, useRef } from "react"

export function UseLayoutEffect(){
    
    const boxRef = useRef()
    useEffect(()=>{
        console.log(boxRef.current.offsetHeight)
    },[])
    return(
        <div className="p-4">
            <div className="border border-2 w-25 text-bg-dark p-2" ref={boxRef}>Hello</div>
        </div>
    )
}