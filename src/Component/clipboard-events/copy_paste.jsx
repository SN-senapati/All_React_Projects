import { useState } from "react"
export function ClipboardEvents(){
    const [msg, setMsg] = useState("")
    function handlePaste(){
        document.onpaste = function(){
            return false
        }
    }

    function handleCopy(e){
        setMsg(e.target.value + " copy to clipboard")
    }

    function handleContext(){
        document.oncontextmenu = function(){
            alert("Right click is not allowed")
            return false;
        }
    }

    function handleDoubleClick(){
        alert("double clicked")
    }

    return(
        <div className="w-25 p-4 border border-2" onContextMenu={handleContext} onDoubleClick={handleDoubleClick}>
            <div>
                <label htmlFor="" className="form-label">Account Number</label>
                <div>
                    <input type="text" className="form-control" onCopy={handleCopy}/>
                </div>
                <div className="mt-2">{msg}</div>
            </div>
            <div>
                <label htmlFor="" className="form-label">Verify Account</label>
                <div>
                    <input type="text" className="form-control" onPaste={handlePaste}/>
                </div>
            </div>
        </div>
    )
}