import axios from "axios"
import { useEffect,useRef,useState } from "react"

export function PracticeDebounce(){
    const thread = useRef(null)
    const [value,setValue] = useState("")
    function handleKeyUp(e){
        clearTimeout(thread.current)
        thread.current = setTimeout(()=>{
            console.log("search result :"+ e.target.value)
            setValue(e.target.value)
        },1000)
    }
    return(
        <div className="container-fluid p-4">
            <h3>Easy level</h3>
            <div className="input-group w-25">
                <input type="search" className="form-control" onKeyUp={handleKeyUp}/>
                <button className="btn btn-warning bi bi-search input-group-text"></button>
            </div>
            <div>{value}</div>
        </div>
    )
}

export function PracticeDebouceDemo(){

    const [resultt, setResultt] = useState("")
    const [color, setColor] = useState("")
    const thread = useRef(null)

    function result(data){
        axios.get("./public/users.json")
        .then((res)=>{
            const found = res.data.find((user,i)=>{
                return user.user_id === data
            })

            if(found){
                setResultt("Already Taken")
                setColor("mt-2 text-danger")
            }else{
                setResultt("Available")
                setColor("mt-2 text-success")
            }
        })
    }

    function handleKeyUp(e){
        const username = e.target.value
        if(username === ""){
            setResultt("");
            setColor("");
            return;
        }
        clearTimeout(thread.current)
        thread.current = setTimeout(()=>{
            result(e.target.value)
        },500)
    }

    return(
        <div className="container-fluid p-4">
            <h3>Intermediate question</h3>
            <div className="input-group w-25">
                <input type="text" name="username" className="form-control" onKeyUp={handleKeyUp}/>
                <button className="input-group-text bi bi-search btn btn-warning"></button>
            </div>
            <div className={color}>{resultt}</div>
        </div>
    )
}

export function Another(){

    const [product, setProduct] = useState([])
    const [msg, setMsg] = useState("")
    const thread = useRef(null)

    function ProductDetails(product){
        axios.get("./public/practice.json")
        .then((res)=>{
            const result = res.data.filter((items => items.name.toLowerCase().includes(product.toLowerCase())))
            if(result.length === 0){
                setMsg("Not Found")
                setProduct([])  
            }else{
                setProduct(result)
                setMsg("")
            }
        })
    }
    function handleKeyUp(e){
        const product = e.target.value
        clearTimeout(thread.current)
        setMsg("")
        if(product === ""){
            thread.current = null
            setProduct([])
            return
        }
        clearTimeout(thread.current)
        thread.current = setTimeout(()=>{
            ProductDetails(product)
        },1000)
    }
    return (
        <div className="container-fluid p-4">
            <h3>Search Product</h3>
            <input onKeyUp={handleKeyUp} type="search" role="search" name="product" className="form-control w-25"/>
            <div className="mt-2">
                <h5>Availble Product</h5>
                <div>
                    <div>{msg}</div>
                    <ul>
                        
                        {
                            product.map((items,i)=>
                                <li key={i}>{items.name}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}