import { createContext } from "react"
import { Parent } from "./Parent"

export const NameContext = createContext()
export function GrandParent(){
    const name = "sn senapti"
    return(
        <div className="p-4">
            <NameContext.Provider value={name}>
                <Parent/>
            </NameContext.Provider>
        </div>
    )
}