import axios from "axios"
import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export function FakeStoreProducts(){
    const params = useParams()
    const [product, setProduct] = useState([{id:0,title:null,image:null,category:null,rating:{rate:0,count:0}}])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then((res)=>
            setProduct(res.data)
        )
    },[])
    return (
        <div>
            <h3>Products</h3>
            <div className="row">
                <div className="col">
                    <div className="d-flex flex-wrap">
                        {
                            product.map((items,index)=>
                                <div className="card m-2" style={{width:"150px"}} key={index}>
                                    <div className="card-header">
                                        <img src={items.image} alt="error" className="card-img-top" height={100}/>
                                    </div>  
                                    <div className="card-footer">
                                        <Link to={`details/${items.id}`}><button className="bi bi-eye btn btn-primary w-100"> View </button></Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="col">
                        <Outlet/>
                </div>
            </div>
            <Link to="/">Back to Home</Link>
        </div>
    )
}