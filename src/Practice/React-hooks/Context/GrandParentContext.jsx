import { createContext } from "react"
import { ParentContext } from "./ParentContext"

export const NickNameContext = createContext()
export function GrandContext(){
    const nickName = "chunia"
   return (
        <div className="p-4 border border-1 text-bg-dark">
            <h3>Grand Parent</h3>
            <NickNameContext.Provider value={nickName}>
                <ParentContext/>
            </NickNameContext.Provider>
        </div>
   )
}