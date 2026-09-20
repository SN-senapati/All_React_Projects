import { ChildContext } from "./ChildContext";

export function ParentContext(){
    return(
        <div className="p-4 border border-1 text-bg-success">
            <h3>Parent</h3>
            <ChildContext/>
        </div>
    )
}