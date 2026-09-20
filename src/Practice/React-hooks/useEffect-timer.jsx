import { useEffect } from "react"
export function UseEffectTimer(){
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Timer running")
        },1000)

        return()=>{
            clearInterval(timer)
        }
    },[])
    return(
        <>
            
        </>
    )
}