import { useState, useRef } from "react"
import "./loading-status.css"
export function LoadingStatus(){
    const [toggleButton, setToggleButton] = useState("")
    const [toggleProgress, setToggleProgress] = useState("d-none")
    const [toggleImage, setToggleImage] = useState("d-none")
    const [valueUpdate, setValueUpdate] = useState(1)
    const [playPauseBtn, setPlayPauseBtn] = useState("d-none")
    let progressValue = useRef(1)
    let thread = useRef(null)
    function LoadingValue(){
        progressValue.current = progressValue.current + 1
        setValueUpdate(progressValue.current)
        if(progressValue.current === 100){
            clearInterval(thread.current)
            setToggleImage("d-block")
            setToggleProgress("d-none")
            setPlayPauseBtn("d-none")
        }
        console.log(progressValue.current)
    }
    function LoadDetails(){
        setToggleProgress("d-block")
        setToggleButton("d-none")
        setPlayPauseBtn("d-block my-2")
        thread.current = setInterval(LoadingValue,100)
    }

    function pauseClick(){
        clearInterval(thread.current)
        console.log(thread.current)
        thread.current = null
    }

    function playClick(){
        if(!thread.current){
            thread.current = setInterval(LoadingValue, 100)
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
            <div className="text-center">
                <div className={toggleButton}>
                    <button className="btn btn-primary" onClick={LoadDetails}>LoadImage</button>
                </div>
                <div className={toggleProgress}>
                    <progress style={{height:"30px",width:"300px", accentColor:"gray"}} min={0} max={100} value={valueUpdate}></progress>
                    <div>{valueUpdate} % completed</div>
                </div>
                <div className={playPauseBtn}>
                    <button className="bi bi-play btn btn-primary mx-1" onClick={playClick}></button>
                    <button className="bi bi-pause btn btn-danger" onClick={pauseClick}></button>
                </div>
                <div className={toggleImage}>
                    <img src="../public/images/iphone-17pro.png" alt="error" width={200}/>
                </div>
            </div>
        </div>
    )
}