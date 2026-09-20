import { useState,useRef } from "react"

export function ThrottleEx(){
    const [ms, setMs] = useState(0)
    const [sec, setSec] = useState(0)
    const thread = useRef(null) 
    function clock(){
        setMs((prev)=>{
            //  console.log("prev ms:", prev);
            if(prev >= 99){
                // console.log("SEC INCREMENT");
                setSec(s=>s+1) //1
                return 0
            }
            return prev+1
        })
    }
    function handleStartClick(){
        if(thread.current === null){
            thread.current = setInterval(clock,10) 
            console.log(thread.current) 
        }
    }
    function handleStopClick(){
        clearInterval(thread.current)
        console.log(thread.current)
        thread.current = null
    }
    return(
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center">
                <div className="row w-25">
                    <div className="col border border-2 d-flex justify-content-center align-items-center" style={{height:"50px"}}>
                        <div></div>
                    </div>
                    <div className="col border border-2 d-flex justify-content-center align-items-center" style={{height:"50px"}}>
                        <div></div>
                    </div>
                    <div className="col border border-2 d-flex justify-content-center align-items-center" style={{height:"50px"}}>
                        <div className="fs-4">{sec}</div>
                    </div>
                    <div className="col border border-2 d-flex justify-content-center align-items-center" style={{height:"50px"}}>
                        <div className="fs-4">{ms}</div>
                    </div>
                </div>
            </div>
                <div className="input-group justify-content-center mt-2">
                    <button className="btn btn-outline-secondary" onClick={handleStartClick}>start</button>
                    <button className="btn btn-outline-secondary" onClick={handleStopClick}>stop</button>
                    <button className="btn btn-outline-secondary">pause</button>
                </div>
        </div>
    )
}