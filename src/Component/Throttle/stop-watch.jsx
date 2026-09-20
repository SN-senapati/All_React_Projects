import { useState,useRef, useReducer } from "react"

// export function StopWatch(){
//     const [ms, setMs] = useState(0)
//     const [sec, setSec] = useState(0)
    
//     function clock() {
//     setMs(prev => {
//         if (prev + 1 > 100) {
//             setSec(s => s + 1);
//             return 0;
//         }
//         return prev + 1;
//     });
// }

//     function startClick(){
//         setInterval(clock, 10)
//     }

//      return (
//         <div>
//             <div className="d-flex justify-content-center align-items-center">
//                 <div className="border border-2 row w-25" style={{height:"50px"}}>
//                     <div className="border border-2 col d-flex align-items-center justify-content-center"></div>
//                     <div className="border border-2 col d-flex align-items-center justify-content-center"></div>
//                     <div className="border border-2 col d-flex align-items-center justify-content-center">{sec}</div>
//                     <div className="border border-2 col d-flex align-items-center justify-content-center">{ms}</div>
//                 </div>
//             </div>
//             <div className="d-flex justify-content-center mt-4">
//                 <button className="btn btn-outline-danger" onClick={startClick}>Start</button>
//                 <button className="btn btn-outline-danger mx-1">Pause</button>
//                 <button className="btn btn-outline-danger">Resume</button>
//             </div>
//         </div>
//     )
// }

export function Example(){
    const [count, setCount] = useState(0)
    let thread = useRef(null)
    function increase(){
        setCount(prev => prev + 1)
    }
    console.log("count = ", count)
    function startClick(){
        if(!thread.current){
            thread.current = setInterval(increase,10)
        }
        console.log(thread.current)
    }

    function stopClick(){
        clearInterval(thread.current)
        thread.current = null
    }

    function resumeClick(){
        if(!thread.current){
            thread.current = setInterval(increase,1000)
        }
    }

    function resetClick(){
        clearInterval(thread.current)
        setCount(0)
        thread.current = null
    }
    return (
        <div className="container">
            <button className="btn btn-outline-primary" onClick={startClick}>start</button>
            <button className="btn btn-outline-primary" onClick={stopClick}>stop</button>
            <button className="btn btn-outline-primary" onClick={resumeClick}>resume</button>
            <button className="btn btn-outline-primary" onClick={resetClick}>reset</button>
            <div>{count}</div>
        </div>
    )
}