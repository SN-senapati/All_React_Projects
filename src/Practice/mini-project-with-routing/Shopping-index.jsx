import { BrowserRouter,Routes, Route } from "react-router-dom";
import { ShoppingHome } from "./Shopping-home";
import { ShoppingProducts } from "./Shopping-products";
import { ProductDetails } from "./shopping-product-details";
import { ShoppingSearch } from "./Shopping-search";
import { SearchResult } from "./Shopping-search-result";
export function ShoppingIndex(){
    return(
        <div className="container-fluid p-2">
            <BrowserRouter>
                <header className="text-bg-dark p-3">
                    <h3 className="text-center bi bi-shop"> Shopping Index</h3>
                </header>
                <section>
                    <Routes>
                        <Route path="/" element={<ShoppingHome/>}></Route>
                        <Route path="products/:category" element={<ShoppingProducts/>}>
                            <Route path="details/:id" element={<ProductDetails/>}/>
                        </Route>
                        <Route path="search" element={<ShoppingSearch/>}></Route>
                        <Route path="result" element={<SearchResult/>}></Route>
                        {/* <Route path="products/:category/:id" element={<ProductDetails/>}/> */}
                        <Route path="*" element={<div><h3>Requested path is not found</h3></div>}></Route>
                    </Routes>
                </section>  
            </BrowserRouter>
        </div>
    )
}