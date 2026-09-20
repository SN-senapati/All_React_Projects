import { useContext } from "react"
import { NameContext } from "./Grand_Parent"

export function Child(){
    const name = useContext(NameContext)
    console.log(name)
    return(
        <div className="p-4">
            <dl>
                <dt>name</dt>
                <dd>{name}</dd>
            </dl>
        </div>
    )
}