export function FakeStoreSearch(){
    return (
        <div>
            <h3>Search Products</h3>
            <form method="get" action="/result">
                <div className="input-group" style={{width:"300px"}}>
                    <input type="search" name="category" className="form-control w-25" placeholder="search products"/>
                    <button className="btn btn-primary input-group-text" type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}