import axios from "axios"
import { useEffect, useState } from "react"
export function KeyEvent(){

    const [data, setData] = useState([])
    const [msg, setMsg] = useState("")
    const [error, setError] = useState("")
    function LoadProducts(){
        axios.get("/users.json")
        .then((res)=>
            setData(res.data)
        )
    }

    function handleKeyUp(e){
        for(var user of data){
            if(e.target.value === ""){
                setMsg("")
                // setError("text-danger")
            }else{
                if(user.user_id === e.target.value){
                    setMsg("already taken")
                    setError("text-danger")
                    break;
                }else{
                    setMsg("available")
                    setError("text-success")
                }
            }
        }
    }


    useEffect(()=>{
        LoadProducts()
    },[])
    return(
        <div className="container-fluid p-4">
            <div className="w-25">
                <h3>Register</h3>
                <div>
                    <label htmlFor="">Username</label>
                    <div>
                        <input type="text" name="uname" className="form-control" onKeyUp={handleKeyUp}/>
                    </div>
                    <div className={error}>{msg}</div>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <div>
                        <input type="text" name="uname" className="form-control"/>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}