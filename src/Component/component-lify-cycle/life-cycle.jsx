import { useEffect,useState } from "react"

export function Login(){
    useEffect(()=>{
        console.log("login component mount")
        return ()=>{
            console.log("login component unmounted")
        }
    },[])
    return (
        <div>
            <h3>Login</h3>
        </div>
    )
}

export function Register(){
    useEffect(()=>{
        console.log("Register component mount")
        return ()=>{
            console.log("Register component unmounted")
        }
    },[])
    return (
        <div>
            <h3>Login</h3>
        </div>
    )
}

export function LifeCycle(){
    
    const [component, setComponent] = useState()

    function LoginClick(){
        setComponent(<Login></Login>)
    }
    function RegisterClick(){
        setComponent(<Register/>)
    }
    return (
        <div className="p-4">
            <h3>Login and Register</h3>
            <button onClick={LoginClick} className="mx-2">Login</button>
            <button onClick={RegisterClick}>Register</button>
            <hr />
            {component}
        </div>
    )
}