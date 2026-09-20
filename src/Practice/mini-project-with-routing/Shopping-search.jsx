import { useNavigate } from "react-router-dom"

export function ShoppingSearch(){
    const navigate = useNavigate()
    function handleClick(){
        navigate("/")
    }
    return(
        <div className="mt-2">
            <form method="get" action="/result">
                <label htmlFor="" className="form-label">Search</label>
                <div className="input-group w-25">
                    <input type="text" name="category" className="form-control" placeholder="Search Products" type="search" role="search" />
                    <button className="btn btn-outline-dark input-group-text">Search</button>
                </div>
            </form>
            <button className="btn btn-dark mt-2" onClick={handleClick}>Back</button>
        </div>
    )
}