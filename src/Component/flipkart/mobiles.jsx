import { useEffect, useState } from "react";
import axios from "axios";

export function Mobile(){

    const [product,setProduct] = useState({title:null,img:null,price:0,starRating:0,rate:{ratings:0,reviews:0},offers:[]})
    
    // function LoadProducts(){
    //     var http = new XMLHttpRequest();
    //     http.open("get", "/product.json",true)
    //     http.send()
    //     http.onreadystatechange = function(){
    //         if(http.readyState === 4 && http.status === 200){
    //             setProduct(JSON.parse(http.responseText))
    //         }
    //     }
    // }

    function LoadProducts(){
       axios.get("../public/product.json")
       .then((response)=>
            setProduct(response.data)
        )
    }

    useEffect(()=>{
        LoadProducts()
    },[])

    return (
        <div className="container-fluid p-4">
            <h2 className="mb-2">Mobiles Details</h2>
            <div className="row align-items-center">
                <div className="col-3">
                    <img src={product.img} alt="errir" width={300} />
                </div>
                <div className="col-9">
                    <h1>{product.title}</h1>
                    <p className="fs-2 my-2">{product.price.toLocaleString("en-in",{style:"currency",currency:"INR",minimumFractionDigits:0})}</p>
                    <span className="badge rounded bg-success d-inline-flex align-items-center">
                        <span className="fs-6">{product.starRating}</span>
                        <span className="bi bi-star-fill ms-1"></span>
                    </span>
                    <span className="fs-5 text-secondary">
                        <span className="mx-2">Ratings : {product.rate.ratings}</span>
                        <span>Reviews : {product.rate.reviews}</span>
                    </span>
                    <div className="mt-4">
                        <h4 className="mb-3">Available Offers</h4>
                        <ul className="list-unstyled">
                            {
                                product.offers.map((data,index)=>
                                    <li className="bi bi-tag-fill text-success fs-5" key={index}> <span className="text-dark">{data}</span></li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export function DommyJson(){
    const [products, setProducts] = useState([]);

    function LoadProducts(){
        axios.get("https://dummyjson.com/products")
        .then((response)=>
            // console.log(response)
            setProducts(response.data.products)
        )
        .catch((error)=>
            console.log(error)
        )
    }

    useEffect(()=>{
        LoadProducts()
    },[] )

    return (
        <div className="container">
            <table className="table text-center table-hover table-dark table-striped caption-top">
                <caption className="text-center fs-2"></caption>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Ratings</th>
                        <th>Images</th>
                    </tr>
                </thead>
                <tbody className="align-middle">
                    {
                        products.map((data)=>
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.category}</td>
                                <td>
                                    <span className="badge bg-warning text-dark rounded rounded-1 d-inline-flex align-items-center">
                                        <span>{data.rating}</span>
                                        <span className="bi bi-star-fill ms-1"></span>
                                    </span>
                                </td>
                                <td>
                                    <img src={data.images[0]} alt="error" width={100}/>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}