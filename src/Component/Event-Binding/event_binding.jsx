import { useEffect, useState } from "react"
import axios from "axios"

export function EventBinding(){
    function handleInsertClick(id,name,cities,e){
        console.log("insert clicked...")
        console.log(`id : ${id}\nname : ${name}\ncities : ${cities}`)
        console.log(`button value : ${e.target.innerText}\nbutton class : ${e.target.className}\nX positon : ${e.clientX}`)
    }
    return(
        <div className="p-4">
            <button onClick={(event)=>handleInsertClick(1,"tv",["hyd","odisha"],event)} className="btn btn-primary">insert</button>
        </div>
    )
}

export function TwoWayBinding(){

    const [user, setUser] = useState("John ")
    function handleChange(e){
        setUser(e.target.value)
    }
    return(
        <div className="container">
            <input type="text" value={user} onChange={handleChange}/>
            <p>{user}</p>
        </div>
    )
}

export function MouseEvent(){

    const [product,setProduct] =  useState([]);
    const [preview, setPreview] = useState()
    function LoadProducts(){
        axios.get("./public/mobiles.json")
        .then((res)=>
            setProduct(res.data)
        )
    }
    useEffect(()=>{
        LoadProducts()
    },[])

    function handleMouseOver(e){
        setPreview(e.target.src);
    }
    return (
        <div className="container-fluid p-4">
            <div className="row border border-2 w-50">
                <div className="col-3">
                    {
                        product.map((mobile,index)=>
                            <div key={index} className="border border-2 d-flex align-items-center justify-content-center m-1">
                                <img onMouseOver={handleMouseOver} src={mobile.img_src} alt="error" width={40} height={60} className="my-2"/>
                            </div>
                        )
                    }
                </div>
                <div className="col-9">
                    <img src={preview} alt="" />
                </div>
            </div>
        </div>
    )
}