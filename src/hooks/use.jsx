import React from "react"
import { use } from "react"
function Product(){
    return fetch("http://localhost:4400/videos/1").then((res)=>res.json())
}

function ViewProduct(){
    const product = use(Product())
    return product.title
}
export function SuspenseDemo(){
    return(
        <div className="container-fluid">
            <React.Suspense fallback={<p>Loading.....</p>}>
                <ViewProduct/>
            </React.Suspense>
        </div>
    ) 
}