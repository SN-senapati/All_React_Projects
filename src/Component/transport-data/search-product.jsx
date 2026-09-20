import { createContext, useEffect,useState } from "react";
import { SearchResult } from "./search-result";
import axios from "axios";

export let SearchContext = createContext(null)
export function SearchProduct(){
    const [product, setProduct] = useState([])
    const [searchItem, setSearchItem] = useState()
    const [searchCount, setSearchCount] = useState(0)
    const [searchArrList, setSearchArrList] = useState([])
    function LoadProduct(url){
        axios.get(url)
        .then((res)=>
            setProduct(res.data)
        )
    }
    function handleChange(e){
        setSearchItem(e.target.value)
        
    }
    function SearchClick(){
        LoadProduct(`https://fakestoreapi.com/products/category/${searchItem}`)
    }

    function collectDataFromChild(product){
        searchArrList.push(product)
        alert(`${product} Added to the cart`)
        setSearchCount(searchArrList.length)
    }

    useEffect(()=>{
        LoadProduct("https://fakestoreapi.com/products")
    },[])
    return (
        <div className="container-fluid p-1">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand fs-3 fw-bold">FAKESTORE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="navbar" data-bs-target="#menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse justify-content-between" id="menu">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a href="#" className="nav-link">Jewellary</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Electrnics</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Clothes</a></li>
                        </ul>
                        <div className="input-group w-25" role="search">
                            <input type="search" placeholder="Search FakeStore.com" className="form-control" onChange={handleChange}/>
                            <button className="bi bi-search btn btn-warning" onClick={SearchClick}></button>
                        </div>
                        <div className="ms-2">
                            <button className="btn btn-warning bi bi-cart4 position-relative"><span className="badge rounded rounded-circle bg-danger position-absolute">{searchCount}</span></button>
                        </div>
                    </div>
                </div>
            </nav>
            <section  className="row mt-2 container-fluid">
                <SearchContext value={product}>
                    <SearchResult onAddToCartClick={collectDataFromChild}/>
                </SearchContext>
            </section>
        </div>
    )
}