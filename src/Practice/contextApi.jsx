import { createContext, useContext, useState } from "react"

let UserContext = createContext(null)
export function ContextApiDemo(){
    let username = "sudipta"
    return (
        <div className="p-4 border border-2">
            <h4>Main</h4>
            <UserContext value={username}>
                <Parent/>
            </UserContext>
        </div>
    )
}

export function Parent(){
    return(
        <div className="p-4 border border-2">
            <h3>Parent</h3>
            <Child/>
        </div>
    )
}

export function Child(){
    return (
        <div className="p-4 border border-2">
            <h3>Child</h3>
            <Grandchild/>
        </div>
    )
}

export function Grandchild(){
    const user = useContext(UserContext)
    return (
        <div className="p-4 border border-2">
            <h3>Grand child</h3>
            <h4>{user}</h4>
        </div>
    )
}



// Context Api practice
export function ParentContainer(){
    const [value, setValue] = useState("");
    function handleChange(e){
        setValue(e.target.value)
    }
    return(
        <div className="container-fluid p-4 text-bg-dark">
            <h4>Parent container</h4>
            <input type="text" className="form-control w-25" onChange={handleChange}/>
            <UserContext value={value}>
                <Level1/>
            </UserContext>
        </div>
    )
}

export function Level1(){
    const user = useContext(UserContext)
    return(
        <div className="p-4 bg-warning mt-2 text-dark">
            <h4>Level1</h4>
            <p className="fs-4 fw-bold">{user}</p>
            <Level2/>
        </div>
    )
}

export function Level2(){
    const user = useContext(UserContext)
    return(
        <div className="p-4 bg-danger">
            <h4>Level2</h4>
            <p className="fs-4 fw-bold">{user}</p>
        </div>
    )
}