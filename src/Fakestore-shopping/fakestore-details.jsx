import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export function FakeStoreDetails(){
    const [product, setProduct] = useState({id:0,title:null,description:null, category:null, rating:{rate:0,count:0}})
    const params = useParams()
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then((res)=>
            setProduct(res.data)
        )
    },[params.id])
    return (
        <div>
            
            <div className="card">
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                        <img src={product.image} alt="error" width={200} height={200}/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body text-bg-dark">
                            <h4 className="card-title">Product Details</h4>
                            <dl>    
                                <dt>Title</dt>
                                <dd>{product.title}</dd>
                                <dt>Price</dt>
                                <dd>{product.price}</dd>
                                <dt>Ratings</dt>
                                <dd>{product.rating.rate}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                {/* <div className="card-footer"></div> */}
            </div>
            {/* <Link to={`/products/${product.category}`}>Back to category</Link> */}
        </div>
    )
}