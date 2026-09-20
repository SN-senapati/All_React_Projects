import { useContext } from "react"
import { NickNameContext } from "./GrandParentContext"
export function GrandChildContext(){
    const nickName = useContext(NickNameContext)
    return(
        <div className="p-4 border border-1 text-bg-warning">
            <h3>Grand Child</h3>
            <p>My name is {nickName}</p>
        </div>
    )
}