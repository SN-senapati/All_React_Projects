// import "./login.css";

export function Login(){
    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <form action="" className="border border-1 p-4 rounded shadow">
                <h2 className="bi bi-person-circle"> User Login</h2>
                <div>
                    <label htmlFor="" className="form-label">Username</label>
                    <div>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="" className="form-label">Password</label>
                    <div>
                        <input type="password" className="form-control"/>
                    </div>
                </div>
                <button className="mt-2 btn btn-danger w-100">Submit</button>
            </form>
        </div>
    )
}

// we can write like this also 

// const Login = function(){
//     return (
//         <div></div>
//     )
// }
// export default Login;