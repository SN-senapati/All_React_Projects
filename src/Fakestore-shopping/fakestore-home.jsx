import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function FakeStoreHome(){
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/categories")
        .then((response)=>
            setCategories(response.data)
            // console.log(response.data)
        )
    },[])
    return (
        <div>
            <h3 className="m-2">Home</h3>
            <ul className="list-unstyled">
                {
                    categories.map((data,index)=>
                        <li key={index} className=" m-2  p-2 text-bg-dark w-25"><Link className="text-decoration-none text-white" to={`/products/${data}`}>{data}</Link></li>
                    )
                }
                <li className=" m-2  p-2 text-bg-dark w-25"><Link className="text-decoration-none text-white" to="/search">Search</Link></li> 
            </ul>
        </div>
    )
}