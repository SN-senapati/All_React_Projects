import { GrandNewChild } from "./grand-child"

export function NewChild({name}){
    // console.log(name)
    return (
        <div className="p-4 border border-2">
            <h3>Child</h3>
            <GrandNewChild name={name}/>
        </div>
    )
}