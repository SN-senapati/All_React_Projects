import { Link } from "react-router-dom"
export function VideoLibraryHome(){
    return (
        <div className="container-fluid p-2">
            <div className="d-flex justify-content-center align-items-center" style={{height:"80vh"}}>
                <Link to="user_login" className="btn btn-dark">User Login</Link>
                <Link to="admin_login" className="btn btn-outline-secondary mx-2">Admin Login</Link>
            </div>
        </div>
    )
}