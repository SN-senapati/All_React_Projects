import axios from "axios"
import { useEffect, useState, } from "react"
import { Link } from "react-router-dom"
export function ShoppingHome(){
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/categories")
        .then((res)=>
            setCategories(res.data)
            // console.log(res.data)
        )
    },[])
    return(
        <div className="mt-4">
            <h3>Home</h3>
            <ul className="list-unstyled">
                {
                    categories.map((data,index)=>
                        <li key={index} className="p-2 text-bg-dark m-2 w-25"><Link to={`/products/${data}`} className="text-white text-decoration-none">{data}</Link></li>
                    )
                }
                <li className=" m-2  p-2 text-bg-dark w-25"><Link className="text-decoration-none text-white" to="/search">Search</Link></li> 
            </ul>
        </div>
    )
}