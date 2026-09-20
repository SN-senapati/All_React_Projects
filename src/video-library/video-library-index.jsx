import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import { VideoLibraryHome } from "./video-library-home";
import { AdminLogin } from "./admin/admin-login";
import { AdminDashboard } from "./admin/admin-dashboard";
import { AddVideo } from "./admin/add-video";

export function VideoLibraryIndex(){
    return (
        <div className="container-fluid p-2">
            <BrowserRouter>
                <header className="text-bg-dark p-2 text-center fs-4"><Link to="/"><span className="bi bi-house fs-3 fw-bold text-white"></span></Link> <span className="fs-3 fw-bold">Video Library</span></header>
                <section>
                    <Routes>
                        <Route path="/" element={<VideoLibraryHome/>}/>
                        <Route path="admin_login" element={<AdminLogin/>}/>
                        <Route path="admin_dashboard" element={<AdminDashboard/>}/>
                        <Route path="add_video" element={<AddVideo></AddVideo>}/>
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}