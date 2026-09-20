import { useEffect, useState,useRef } from "react"
export function StopWatchex(){
    const [ms, setMs] = useState(0)
    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)
    const [hour, setHour] = useState(0)
    // setInterval(clock, 10)
    let thread = useRef(null)
    function clock(){
        setMs((prev)=>{
            if(prev+1 > 99){
                setSec((prev)=>{
                    if(prev === 59){
                        setMin((prev)=>{
                            if(prev > 59){
                                setHour((prev)=>{
                                    return prev + 1
                                })
                                return 0
                            }
                            return prev + 1
                        })
                        return 0
                    }
                    return prev + 1
                })
                return 0
            }
            return prev + 1
        })
        
    }
    
    function startClick(){
        if(!thread.current){
            thread.current = setInterval(clock, 10)
        }
    }
    function pauseClick(){
        clearInterval(thread.current)
        thread.current = null
    }

    function resetClick(){
        setMs(0)
        setSec(0)
        setHour(0)
        setMin(0)
        clearInterval(thread.current)
        thread.current = null;
    }
    return (
        <div className="container-fluid p-4" style={{height:"100vh"}}>
            <div className="p-4 d-flex justify-content-center align-items-center">
                <div className="row border border-1 rounded rounded-2 w-25 text-bg-dark">
                    <div className="col border border-1 rounded-start-2 d-flex align-items-center justify-content-center fs-4 fw-bold" style={{height:"60px"}}>{hour}</div>
                    <div className="col border border-1 d-flex align-items-center justify-content-center fs-4 fw-bold" style={{height:"60px"}}>{min}</div>
                    <div className="col border border-1 d-flex align-items-center justify-content-center fs-4 fw-bold" style={{height:"60px"}}>{sec}</div>
                    <div className="col border border-1 rounded-end-2 d-flex align-items-center justify-content-center fs-4 fw-bold" style={{height:"60px"}}>{ms}</div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <button className="btn btn-outline-danger" onClick={startClick}>Start</button>
                    <button className="btn btn-outline-danger mx-2" onClick={pauseClick}>Pause</button>
                    <button className="btn btn-outline-danger" onClick={resetClick}>Reset</button>
                </div>
            </div>
        </div>
    )
}