import { useEffect,useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import axios from "axios"

export function SearchResult(){
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const [notFound, setNotFound] = useState(false)
    const [product, setProduct] = useState([{id:0,title:null,image:null,category:null,rating:{rate:0,count:0}}])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${searchParams.get("category")}`)
        .then((res)=>{
            if(res.data.length === 0){
                setNotFound(true)
            }else{
                setProduct(res.data)
                setNotFound(false)
            }
            // setProduct(res.data)
            // setError("")
            // console.log(res.data)
        })
        .catch(()=>{
            // setError("Category not found")
            setNotFound(true)
        })
    },[searchParams])

    function handleNavigate(){
        navigate("/search") 
    }
    return(
        <div className="mt-2">
            <h3>Product Details</h3>
            <div className="d-flex align-items-center">
                {
                    notFound ?
                    <h2 className="text-danger">Category not found</h2>
                    :
                    product.map((data,index)=>
                        <div key={index} className="mx-2">
                            <img src={data.image} alt="error" width={100} style={{height:"100px"}}/>
                        </div>
                    )
                }
            </div>
            <button className="btn btn-outline-secondary mt-2" onClick={handleNavigate}>Back</button>
        </div>
    )
}