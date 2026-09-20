import { useState } from "react"
export function ClipBoard(){
    const[copyMsg, setCopyMsg] = useState()
    function handleCopy(e){
        setCopyMsg(e.target.value)
    }
    function handleCut(e){
        e.preventDefault()
    }
    function handlePaste(e){
        // e.preventDefault() or you can use
        document.onpaste = function(){
            return false
        }
        // alert("paste is not allowed")
    }

    function handleDoubleClick(){
        alert("Double Clicked")
    }

    function handleContext(e){
        e.preventDefault();
        alert("right click is not allowed")
    }
    return(
        <div className="container-fluid p-4">
            <div>
                <label htmlFor="" className="form-label">Account Number</label>
                <div>
                    <input type="text" className="form-control w-25" onContextMenu={handleContext} onDoubleClick={handleDoubleClick} onCopy={handleCopy} onCut={handleCut}/>
                </div>
                <div className="mt-2 text-success">{copyMsg} copy to clipboard</div>
            </div>
            <div>
                <label htmlFor="" className="form-label">Verify Account</label>
                <div>
                    <input type="text" className="form-control w-25" onPaste={handlePaste}/>
                </div>
            </div>
        </div>
    )
}