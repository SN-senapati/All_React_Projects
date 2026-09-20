import axios from "axios"
import { useEffect, useState } from "react"
    // import "./practice-question.css"

    export function MouseEventEx(){
        
        const [mobiles, setMobiles] = useState([{img_src:null}])
        const [preview, setPreview] = useState(null)
        function LoadProducts(){
            axios.get("./public/mobiles.json")
            .then((res)=>
                setMobiles(res.data)
            )
        }
        function handleMouseOver(e){
            setPreview(e.target.src)
        }
        function handleMouseOut(){
            setPreview(null)
        }
        useEffect(()=>{
            LoadProducts()
        },[])
        return (
            <div className="container-fluid p-4">
                <div className="border border-2 p-4 w-50 row">
                    <div className="col-3">
                        {
                            mobiles.map((img,i)=>
                                <div key={i} className="border border-2 rounded rounded-2 d-flex justify-content-center align-items-center p-2 my-4" style={{width:"100px"}}>
                                    <img src={img.img_src}  alt="error" width={40} height={60} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
                                </div>
                            )
                        }
                    </div>
                    <div className="col-9 d-flex justify-content-center align-items-center">
                        {
                            preview &&
                            <img src={preview} alt="error" width={150} height={300}/>
                        }
                    </div>
                </div>
            </div>
        )
    }