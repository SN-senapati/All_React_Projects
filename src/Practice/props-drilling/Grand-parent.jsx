import { ParentNew } from "./parent"

export function Grandparent(){
    const Name = "Rahul"
    return(
        <div className="p-4 border border-2 m-4">
            <h3>Grand Parent</h3>
            <ParentNew name = {Name}></ParentNew>
        </div>
    )
}