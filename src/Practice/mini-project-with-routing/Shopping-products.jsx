import axios from "axios"
import { useEffect,useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom"

export function ShoppingProducts(){
    const params = useParams()
    const [products, setProduct] = useState([{}])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then((res)=>{
            setProduct(res.data)
            // console.log(res.data)
        })
    },[params.category])
    return(
        <div className="mt-2">
            <h3>Products List</h3>
            <div className="d-flex gap-2">
                {
                    products.map((data,index)=>

                        <div className="card" style={{width:"150px"}} key={index}>
                            <div className="card-header">
                                <img src={data.image} alt="" className="card-img-top" style={{height:"100px"}}/>
                            </div>
                            <div className="card-footer">
                                {/* <Link to={`/products/${params.category}/${data.id}`}>
                                    <button className="btn btn-primary w-100"><span className="bi bi-eye"> View </span></button>
                                </Link> */}
                                <Link to={`details/${data.id}`}>
                                    <button className="btn btn-primary w-100"><span className="bi bi-eye"> View </span></button>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
            <div>
                <Outlet/>
            </div>
            <div className="mt-4">
                <button className="btn btn-dark"><Link to="/" className="text-white text-decoration-none">Back to Home</Link></button>
            </div>
        </div>
    )
}