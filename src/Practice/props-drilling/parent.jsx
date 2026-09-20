import { NewChild } from "./child";

export function ParentNew({name}){
    // console.log(name)
    return(
        <div className="p-4 border border-2">
            <h3>Parent</h3>
            <NewChild name = {name}/>
        </div>
    )
}