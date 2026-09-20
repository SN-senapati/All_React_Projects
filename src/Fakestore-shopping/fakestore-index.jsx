import { BrowserRouter,Routes, Route } from "react-router-dom";
import { FakeStoreHome } from "./fakestore-home";
import { FakeStoreProducts } from "./fakestore-product";
import { FakeStoreDetails } from "./fakestore-details";
import { FakeStoreSearch } from "./fakestore-search";
import { FakeStoreResult } from "./fakestore-search-result";
export function FakeStoreIndex(){
    return (
        <div className="container-fluid p-2">
            <BrowserRouter>
                <header className="text-bg-dark p-3 text-center">
                    <h3>Fakestore Index</h3>
                </header>
                <section className="mt-2">
                    <Routes>
                        <Route>
                            <Route path="/" element={<FakeStoreHome/>}></Route>
                            <Route path="/products/:category" element={<FakeStoreProducts/>}>
                                <Route path="details/:id" element={<FakeStoreDetails/>}></Route>
                            </Route>
                            <Route path="search" element={<FakeStoreSearch/>}></Route>
                            <Route path="result" element={<FakeStoreResult/>}></Route>
                            <Route path="*" element={<div><h3>Requested path not found</h3></div>}></Route>
                        </Route>
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}