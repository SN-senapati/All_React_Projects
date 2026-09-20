import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { JsTutorial } from "./js-tutorial";
import { Java } from "./java-tutorial";
import { Details } from "./details";
export function VideoTotorial(){
    return (
        <div className="container-fluid p-2">
            <BrowserRouter>
                <header className="p-4 text-bg-dark">
                    <span className="bi bi-camera-video fs-4"> Video Totorials</span>
                    <div>
                        <Link to="/" className="text-white"> Home</Link>
                        <Link to="/java" className="text-white mx-2"> Java</Link>
                        <Link to="/js" className="text-white"> Javascript</Link>
                    </div>
                </header>
                <section className="mt-4">
                    <Routes>
                        <Route path="/" element={<div><h3>Welcome to tech videos</h3><p>We provides for various videos technologies like : java, javascript</p></div>}></Route>
                        <Route path="js" element={<JsTutorial/>}></Route>
                        <Route path="java" element={<Java/>}/>
                        <Route path="details/:id/:name/:price" element={<Details/>}/>
                        <Route path="*" element={<div><h3>Requested path : Not Found</h3></div>}></Route>
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}