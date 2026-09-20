import axios from "axios"
import { useEffect, useState } from "react"
import "./fake_store.css"

export function FakeStore(){
    const [product, setProduct] = useState([])
    const [categories, setCategories] = useState([])
    const [value, setValue] = useState("")
    const [search, setSearch] = useState(false)
    // const [cart, setCart] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartItem, setCartItem] = useState([])
    function LoadCategories(){ 
        axios.get("https://fakestoreapi.com/products/categories")
        .then((res)=>{
            setCategories(res.data)
            // console.log(res.data)
        })
}
    function LoadProducts(url){
        axios.get(url)
        .then((res)=>
            // console.log(res.data)
            setProduct(res.data)
        )
    }

    function handleChange(e){
        let category = e.target.value;
        if(category === "All"){
            LoadProducts("https://fakestoreapi.com/products/")
        }else{
            LoadProducts(`https://fakestoreapi.com/products/category/${category}`)
        }
    }

    function inputChange(e){
        setValue(e.target.value.toLowerCase())
    }
    function searchClick(){
        let data = categories.map((items)=>items.toLowerCase())
        if(data.indexOf(value) !== -1){
            LoadProducts(`https://fakestoreapi.com/products/category/${value}`)
            setSearch(false)
        }else{
            setProduct([])
            setSearch(true)
        }
    }

    function addToCartClick(product){
        // let existingItem = cart.find((data)=> data.id === product.id)
        // if(existingItem){
        //     alert("This cart already added...")
        // }else{

        //     setCart([...cart,product])
        // }

            let existingItem = cartItem.find((data)=> data.id === product.id)
            if(existingItem){
                alert("This cart already added...")
            }else{
                cartItem.push(product)
                // alert(`${product.titel}\nAdded to cart`)
                setCartCount(cartItem.length)
            }
    }



    useEffect(()=>{
        LoadProducts("https://fakestoreapi.com/products/")
        LoadCategories()
    },[])

    // let category = product.map((items)=>{
    //     return items.category
    // })
    // let unique = [...new Set(category)]
    
    return(
        <div className="container-fluid p-1 overflow-hidden" style={{height:"100vh"}}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-sticky top-0 z-1">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand fs-3 fw-bold">Shooping</a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" type="button" data-bs-target="#menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse justify-content-between" id="menu">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a href="#" className="nav-link">Jewellary</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Electrnics</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Clothes</a></li>
                        </ul>
                        <div className="input-group w-25 me-4" role="search">
                            <input type="search" className="form-control" placeholder="Search fakestore.com" onChange={inputChange}/>
                            <button className="btn btn-warning bi bi-search input-group-text" onClick={searchClick}></button>
                        </div>
                        <div>
                            <button className="bi bi-cart4 btn btn-warning position-relative"><span className="badge rounded rounded-circle position-absolute bg-danger" style={{top:"-7px", right:"-9px"}}>{cartCount}</span></button>
                        </div>
                    </div>
                </div>  
            </nav>
            <section className="row mt-2 container-fluid">
                <div className="col-2">
                    <div>
                        <label className="form-label">Select Category</label>
                            <select name="Category" id="" className="form-select" onChange={handleChange}>
                                <option>All</option>
                                {
                                    
                                    categories.map((data,index)=>
                                        <option key={index} value={data}>{data}</option>
                                    )
                                }
                            </select>
                    </div>
                </div>
                <div className="col-10 overflow-auto" style={{height:"85vh"}} id="data">
                    {
                        search &&
                        <div className={product.length === 0 ? "text-center d-block":"d-none"}>
                            <div className="bi bi-tv text-danger" style={{fontSize:"200px"}}></div>
                            <p className="fw-bold fs-1">ITEMS NOT FOUND.....</p>
                        </div>
                    }
                    <div className="d-flex flex-wrap">
                        {
                            product.map((data,index)=>
                                <div className="card m-2" style={{width:"220px"}} key={index}>
                                    <div className="card-header">
                                        <img src={data.image} alt="error"  className="card-img-top" height={150}/>
                                    </div>
                                    <div className="card-body">
                                        <dl className="row">
                                            <dt className="col-6">Price : </dt>
                                            <dd className="col-6">{data.price.toLocaleString('en-in',{style:"currency",currency:"INR", minimumFractionDigits:2})}</dd>
                                            <dt className="col-6">Ratings : </dt>
                                            <dd className="col-6">
                                                <button className="btn btn-success badge"><span>{data.rating.rate}</span> <span className="bi bi-star-fill"></span></button>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-warning w-100" onClick={()=>addToCartClick(data)}>Add to Cart</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}