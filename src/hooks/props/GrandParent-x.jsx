import { ChildZ } from "./Child-z"
import { ParentY } from "./Parent-y"

    export function GrandParentX(){

        const name = "chunia"
        
        return(
            <div className="container-fluid p-4">
                {/* <ParentY name={name} /> */}
                <ChildZ name={name}/>
            </div>
        )
    }