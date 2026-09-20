export function TimerEvent(){


    function signOut(){
        alert("signed out")
        sessionStorage.removeItem("uname")
        window.location.reload()
    }
    function btnClick(){
        sessionStorage.setItem("uname","john")
        alert("signed in")
        setTimeout(signOut, 4000)
    }
    

    return(
        <div className="container">
            <button className="btn btn-primary" onClick={btnClick}>Sign in</button>
        </div>
    )
}