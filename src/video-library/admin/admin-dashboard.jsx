import { Link, useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import { useCallback, useEffect, useState } from "react"
import axios from "axios"
export function AdminDashboard(){
    const [cookies, setCookie, removeCookie] = useCookies(["admin_id"])
    const [videos, setVidoes] = useState([{video_id:0,title:null,description:null,url:null,views:0,likes:0,dislikes:0,comments:0}])
    const navigate = useNavigate()
    function handlClick(){
        removeCookie('admin_id')
        navigate("/")
    }

    const LoadProducts = useCallback(()=>{
        axios.get("http://localhost:4400/videos")
        .then((res)=>
            setVidoes(res.data)
        )
    },[])
    // function LoadProducts(){
    //     axios.get("http://localhost:4400/videos")
    //     .then((res)=>
    //         setVidoes(res.data)
    //     )
    // }
    
    useEffect(()=>{
        if(cookies['admin_id']){
            LoadProducts()
        }else{
            navigate("/admin_login")
        }
    },[])
    return(
        <div>
            <div className="mt-2 d-flex align-items-center justify-content-between">
                <h3>{cookies['admin_id']}</h3>
                <button className="btn btn-link" onClick={handlClick}>Sign out</button>
            </div>
            <Link to="/add_video" className="btn btn-primary bi bi-camera-video"> Add new video</Link>
            <table className="table text-center table-hover table-dark table-striped caption-top">
                <caption className="text-center">Videos Details</caption>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Preview</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        videos.map((video)=>
                            <tr key={video.video_id} className="align-middle">
                                <td>{video.title}</td>
                                <td>
                                    <iframe src={video.url} width="200" height="100"></iframe>
                                </td>
                                <td>
                                    <Link className="bi bi-pen-fill btn btn-light me-2"> Edit</Link>
                                    <Link className="bi bi-trash btn btn-outline-secondary"> Delete</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}