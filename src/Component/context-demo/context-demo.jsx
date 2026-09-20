import { createContext, useContext, useState } from "react"

let UserContext = createContext(null);
export function Level1(){
    let context = useContext(UserContext)
    return (
        <div className="p-4 m-4 text-bg-warning">
            <h4>Level-1 {context}</h4>
            <Level2/>
        </div>
    )
}
export function Level2(){
    let context = useContext(UserContext)
    return (
        <div className="p-4 m-4 text-bg-danger">
            <h4>Level-2 {context}</h4>
        </div>
    )
}
export function ContextDemo(){
    const [user, setUser] = useState("john")
    function handleChange(e){
        setUser(e.target.value)
    }
    return (
        <div className="p-4 m-4 text-bg-dark">
            <h4 className="d-flex align-items-center">Parent <input type="text" onChange={handleChange} className="ms-2 form-control w-25"></input></h4>
            <UserContext value={user}>
                <Level1/>   
            </UserContext>
        </div>
    )
}