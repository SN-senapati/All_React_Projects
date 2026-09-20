import { BrowserRouter,Link, Route, Routes } from "react-router-dom";
import { JsTutorial } from "./js-tutorial";
import { JavaTutorial } from "./java-tutorial";
import { TutorialDetails } from "./Tutorial-details";
export function VideoTutorialRouting(){
    return(
        <div className="container-fluid">
           <BrowserRouter>
                <header className="text-bg-dark p-4">
                    <h3 className="bi bi-camera-video"> Video Tutorial</h3>
                    <div>
                        <Link to="/" className="text-white">Home</Link>
                        <Link to="/java" className="text-white mx-2">Java</Link>
                        <Link to="/js" className="text-white">Javascript</Link>
                    </div>
                </header>
                <section className="mt-4">
                    <Routes>
                        <Route path="/" element={<div><h3>Welcome To Tech Videos</h3></div>}/>
                        <Route path="java" element={<JavaTutorial/>}/>
                        <Route path="js" element={<JsTutorial/>}/>
                        <Route path="details/:id/:name/:price" element={<TutorialDetails/>}/>
                        <Route path="*" element={<div><h3>Requested path is not found</h3></div>}></Route>
                    </Routes>
                </section>
           </BrowserRouter>
        </div>
    )
}