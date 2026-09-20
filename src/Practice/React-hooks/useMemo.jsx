import { useMemo, useState } from "react"

export function UseMemo(){
    const [count, setCount] = useState(0)
    const [search, setSearch] = useState("")
    const products = [
        "Laptop",
        "Fan",
        "Refrizrator",
        "Tv",
        "Ac"
    ]

    // function searchChange(e){
    //     setSearch(e.target.value)
    // }

    const filterproduct = useMemo(()=>{
        return products.filter((value)=>{
            return value.toLowerCase().includes(search.toLowerCase())
        })
    },[search])
    return(
        <div className="p-4">
            <h3>Use Memo</h3>
            <button className="btn btn-outline-dark mb-2" onClick={()=>setCount(count + 1)}>Increment : {count}</button>
            <div className="input-group w-25">
                <input type="text" className="form-control" value={search} role="search" onChange={(e)=>setSearch(e.target.value)} />
                <span className="btn btn-outline-warning input-group-text bi bi-search"></span>
            </div>
            <dl>
                <dt>Product Details</dt>
                {
                    filterproduct.length > 0 ? filterproduct.map((value,index)=>{
                        return <dd key={index}>{value}</dd>
                    }) : <dd className="text-danger fw-bold">Product Not Found</dd>
                }
            </dl>
        </div>
    )
}