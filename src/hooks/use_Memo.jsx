import { useMemo, useState } from "react"

export function UseMemoEx(){
    const [count, setCount] = useState(0)
    const [search, setSearch] = useState("")
    const products = [
        "iphone7",
        "iphone 7pro",
        "iphone 11",
        "iphone 11pro",
        "iphone 13",
        "iphone 13pro",
        "iphone 13pro max",
        "iphone 17",
        "iphone 16 air"
    ]

    function searchChange(e){
        setSearch(e.target.value)
    }

    const filteredProducts = useMemo(()=>{
        console.log("filtering products....")
        return products.filter((p,i)=>{
            return p.toLowerCase().includes(search.toLowerCase())
        })
    },[search])
    return(
        <div className="p-4">
            <h3>Some Example of UseMemo</h3>
            <div className="input-group w-25">
                <input type="text" className="form-control" role="search" value={search} onChange={searchChange}/>
                <button className="bi bi-search btn btn-warning input-group-text"></button>
            </div>
            <button className="btn btn-dark" onClick={()=>setCount(count+1)}>{count}</button>
            <ul className="list-unstyled">
                {
                    filteredProducts.map((product,index)=>{
                        return <li key={index}>{product}</li>
                    })
                }
            </ul>
        </div>
    )
}