import { GrandChildContext } from "./GrandChildContext";
export function ChildContext(){
    return(
        <div className="p-4 border border-1 text-bg-danger">
            <h3>Child</h3>
            <GrandChildContext/>
        </div>
    )
}