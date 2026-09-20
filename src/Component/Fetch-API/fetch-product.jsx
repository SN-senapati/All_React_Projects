import axios from "axios"
import { useEffect,useState,useRef } from "react"

export function FetchProduct(){
    const [product,setProduct] = useState({id:0,title:null,images:[]})
    let productId = useRef(1)
    let thread = useRef(null)
    function LoadProducts(id){
        axios.get(`https://dummyjson.com/products/${id}`)
        .then((res)=>
            setProduct(res.data)
            // console.log(res.data)
        )
    }
    useEffect(()=>{
        LoadProducts(1)
    },[])

    function nextClick(){
        if(productId.current < 194){
            productId.current = productId.current + 1
            LoadProducts(productId.current)
            console.log(productId.current)
        }else{
            productId.current = 1
            LoadProducts(productId.current)
            console.log(productId.current)
        }
    }

    function prevClick(){
        if(productId.current > 1){
            productId.current = productId.current - 1
            LoadProducts(productId.current)
            console.log(productId.current)
        }else{
            productId.current = 194
        }
        LoadProducts(productId.current)

    }

    function valueChange(e){
        productId.current = parseInt(e.target.value)
        LoadProducts(productId.current)
    }

    function playClick(){
        if(!thread.current){
            thread.current = setInterval(nextClick,1000)
        }
    }
    function pauseClick(){
        clearInterval(thread.current)
        thread.current = null
    }
    return (
        <div className="d-flex align-items-center justify-content-center" style={{height:"100vh"}}>
            <div className="card w-50">
                <div className="card-header">
                    <div className="card-title fs-4 fw-bold text-center">{product.title}</div>
                </div>
                <div className="card-body row">
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <button className="bi bi-chevron-left btn btn-dark" onClick={prevClick}></button>
                    </div>
                    <div className="col-10">
                        <img src={product.images[0]} height={400} className="w-100"/>
                        <div>
                            <input type="range" className="form-range" min={1} max={194} value={productId.current} onChange={valueChange}/>
                        </div>
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <button className="bi bi-chevron-right btn btn-dark" onClick={nextClick}></button>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-center align-items-center">
                    <button className="btn btn-warning bi bi-play mx-2" onClick={playClick}></button>
                    <button className="bi bi-pause btn btn-danger" onClick={pauseClick}></button>
                </div>
            </div>
        </div>
    )
}