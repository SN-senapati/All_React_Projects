import { useEffect, useState } from "react"
import moment from "moment"

export function DataBinding(){
    // var username = "john"

    const [uname, setUname] = useState("john")
    const [email, setEmail] = useState("senapatisudipti@gmail.com")

    const [today, setToday] = useState(new Date())
    // setUname("askdjfkkjh")
    useEffect(()=>{
        setUname("David")
        setEmail("sudiptisenapati159@gmail.com")
    },[])
    return (
        <div className="container-fluid p-4">
            <h2>Data Binding....</h2>
            {/* <input type="text" value={uname}/> */}
            <p>Hello ! {uname}</p>
            <p>Email - {email}</p>
            <p>Today Date : {today.toLocaleDateString()}</p>
        </div>
    )
}




export function DataBinding3(){
    const [categories] = useState(["All", "Electronics", "Fashion", "Footwear"]);
    return (
        <div className="p-4">
            <h2>Array</h2>
            <nav className="mb-4">
                {
                    categories.map(function(category){
                        return <button className="btn btn-warning mx-2" key={category}>{category}</button>
                    })
                    // categories.map(category => 
                    //     <button className="btn btn-warning" key={category}>{category}</button>
                    // )
                }
            </nav>
            <section>
                <ol>
                    {
                        categories.map((category, index)=>
                            <li key={index}>{category}</li>
                        )
                    }
                </ol>
                <select className="form-select w-25">
                    {
                        categories.map((category)=>
                            <option value={category} key={category}>{category}</option>
                        )
                    }
                </select>
                <ul className="list-unstyled mt-4">
                    {
                        categories.map((category)=>
                            <li key={category}>
                                <input className="form-check-input" type="checkbox"/>
                                <label className="form-check-label mx-2">{category}</label>
                            </li>
                        )
                    }
                </ul>
            </section>
        </div>
    )
}


export function Databinding4(){

    const [product] = useState({
        Name : "Samsung Tv",
        Price :45000,
        ShippedTo:["Delhi","Hyd"],
        Rating : {Rate:4.3, Count:600}
    })

    return (
        <div className="container p-4">
            <table className="table table-dark caption-top w-50">
                <caption className="fw-bold text-dark text-center">Product Table</caption>
                <thead>
                    <tr>
                        {
                            Object.keys(product).map((products)=>
                            <th key={products}>{products}</th>
                            )
                        }
                    </tr>
                </thead>
            </table>
            <div className="mt-4">
                <h3>Product Details</h3>
                <dl>
                    <dt>Name</dt>
                    <dd>{product.Name}</dd>
                    <dt>Price</dt>
                    <dd>{product.Price}</dd>
                    <dt>Shipped To</dt>
                    <dd>
                        <ul>
                            {
                                product.ShippedTo.map(state =>
                                    <li key={state}>{state}</li>
                                )
                            }
                        </ul>
                    </dd>
                    <dt>Ratings</dt>
                    <dd>
                        <span className="badge bg-success rounded p-2 d-inline-flex align-items-center justify-content-center">
                            <span style={{fontSize:"15px"}}>{product.Rating.Rate}</span>
                            <span className="bi bi-star-fill ms-1"></span>
                        </span>
                        <span className="mx-2">Count {product.Rating.Count}</span>
                    </dd>
                </dl>
            </div>
        </div>
    )
}

export function DataBinding5(){
    const [product] = useState([
        {Name : "Samsung Tv",Price : 45000},
        {Name : "Mobile", Price : 24000},
        {Name : "Watch", Price : 13000}
    ])

    return (
        <div className="container p-4">
            <h3>Product Table</h3>
            <table className="table table-hover table-striped table-dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((data,index) => 
                            <tr key={index}>
                                <td>{data.Name}</td>
                                <td>{data.Price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export function Databinding(){
    const [today, setToday] = useState(new Date())
    const [pattern] = useState(/\+91\d{10}/)
    const [mobile] = useState("+917735879057")
    return(
        <div className="container">
            <h3>Data Binding</h3>
            {/* <p>{date.toLocaleDateString()}</p> */}
            <p>{moment(today).format('dddd DD, MMMM')}</p>
            <p>{(mobile.match(pattern))?"varified":"invalid"}</p>
        </div>
    )
}