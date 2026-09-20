import axios from "axios"
import { useEffect,useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

export function FakeStoreResult(){
    const [searchparams] = useSearchParams()
    const [product, setProduct] = useState([{id:0,title:null,image:null,category:null,rating:{rate:0,count:0}}])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${searchparams.get("category")}`)
        .then((res)=>
            setProduct(res.data)
        )
    },[])

    function handlNavigate(){
        navigate("/search")
    }
    return(
        <div>
            <h3>Search Result</h3>
            <div>
                {
                    product.map((data,index)=>
                        <img key={index} src={data.image} width={100} height={100} className="mx-2"/>
                    )
                }
            </div>
            <button className="btn btn-outline-dark mt-2" onClick={handlNavigate}>Back</button>
        </div>
    )
}