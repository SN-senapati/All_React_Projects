import { useEffect, useState } from "react"
import axios from "axios"
export function KeyDemo(){

    const [users,setUser] = useState([])
    const [msg, setMsg] = useState("")
    const [error, setError] = useState("");
    const [warning, setWarning] = useState("d-none");

    function LoadProducts(){
        axios.get("../public/users.json")
        .then((res)=>
            setUser(res.data)
            // console.log(res.data)
        )
    }

    useEffect(()=>{
        LoadProducts()
    },[])

    function handleKeyUp(e){
        for(var user of users){
            if(e.target.value === ""){
                setMsg("");
            }else{
                if(user.user_id === e.target.value){
                    setMsg("user id taken - try another")
                    setError("text-danger mt-2")
                    break;
                }else{
                    setMsg("user id available")
                    setError("text-success mt-2")
                }
            }
        }
    }
    
    function MsgWarning(e){
        if(e.which >= 65 && e.which <= 90){
            setWarning("d-block mt-2 bi bi-exclamation-triangle text-warning")
        }else{
            setWarning("d-none")
        }

    }

    return(
        <div className="p-4">
            <h2>Register</h2>
            <div className="w-25">
                <label htmlFor="" className="form-label">Username</label>
                <div className="w-75">
                    <input type="text" className="form-control" onKeyUp={handleKeyUp}/>
                </div>
                <p className={error}>{msg}</p>
            </div>
            <div className="w-25">
                <label htmlFor="" className="form-label">Password</label>
                <div className="w-75 input-group">
                    <input type="text" className="form-control" onKeyPress={MsgWarning}/>
                    <span className="bg-warning bi bi-eye-slash input-group-text"></span>
                </div>
                <p className={warning}> Warning - caps on</p>
            </div>
        </div>
    )
}


export function PswDemo(){

    const [psw,setPsw] = useState("");
    const [progress, setProgress] = useState("")
    const [width,setWidth] = useState({width:""})
    // const [meterValue, setMeterValue] = useState(0)
    function verifyPsw(e){
        if(e.target.value === ""){
            // setMeterValue(0)
            setProgress("")
            setPsw("")
        }else{
            if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/)){
                setPsw("Strong Password")
                setProgress("progress-bar progress-bar-striped progress-bar-animated bg-success")
                setWidth({width:"100%"})
                // setMeterValue(100)
            }else{
                if(e.target.value.length < 4){
                    setPsw("Poor Password")
                    setProgress("progress-bar progress-bar-striped progress-bar-animated bg-danger")
                    setWidth({width:"30%"})
                    // setMeterValue(50)
                }else{
                    setPsw("Weak Password")
                    setProgress("progress-bar progress-bar-striped progress-bar-animated bg-warning")
                    setWidth({width:"70%"})
                    // setMeterValue(10)
                }
            }
        }
    }
    return (
        <div className="container-fluid p-4">
            <div>
                <div className="w-25">
                    <label htmlFor="" className="form-label">Password</label>
                    <div className="w-75">
                        <input type="password" name="password" className="form-control" onKeyUp={verifyPsw}/>
                    </div>
                    {/* <meter value={meterValue} min={1} max={100} optimum={100} low={20} high={80} className="w-75 mt-2"></meter> */}
                    <div className="progress mt-2 w-75">
                        <div className={progress} style={width}>{psw}</div>
                    </div>
                    {/* <div className="mt-1">{psw}</div> */}
                </div>
            </div>
        </div>
    )
}