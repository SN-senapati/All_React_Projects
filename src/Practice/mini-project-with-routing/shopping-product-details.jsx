import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function ProductDetails(){
    const params = useParams()
    const [productId, setProductId] = useState({title:null,id:0, price:0, rating:{rate:0, count:0}})
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then((res)=>{
            // console.log(res.data)
            setProductId(res.data)
        })
    },[params.id])
    return(
        <div>
            <h3>Product Details</h3>
            <div className="card w-25">
                <div className="card-header">
                    <img src={productId.image} alt="" className="card-img-top" style={{height:"200px"}}/>
                </div>
                <div className="card-body">
                    <dl className="row fs-5">
                        <dt className="col-4">Price</dt>
                        <dd className="col-8">{productId.price}</dd>
                        <dt className="col-4">Rating</dt>
                        <dd className="col-8">{productId.rating.rate}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}