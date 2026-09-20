import { useFormik } from "formik"
import { useEffect,useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export function AddVideo(){
    const navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies(['admin_id'])
    const [categories,setCategories] = useState([{category_id: 0, category_name:null}])
    function LoadCategories(){
        axios.get("http://localhost:4400/categories")
        .then((res)=>{
            res.data.unshift({category_id:-1, category_name:"Select Category"})
            setCategories(res.data) 
            // console.log(res.data)
        }
        )
    }
    const formik = useFormik({
        initialValues:{
            title:"",
            description:"",
            url:"",
            views:"",
            likes:"",
            dislikes:""
        },
        onSubmit:((video)=>{

            axios.post("http://localhost:4400/videos",video)
            alert("video added successfully...")
            navigate("/admin_dashboard")
            
        }
            
        )
    })
    useEffect(()=>{
        if(cookies["admin_id"] === undefined){
            navigate("/admin_login")
        }

        LoadCategories()

    },[])
    return(
        <div className="d-flex justify-content-center align-items-center">
            <form onSubmit={formik.handleSubmit} className="w-25 p-4 shadow-lg mt-3">
                <div>
                    <label className="form-label">Title</label>
                    <div>
                        <input type="text" name="title" className="form-control" onChange={formik.handleChange}/>
                    </div>
                </div>
                <div>
                    <label className="form-label">Description</label>
                    <div>
                        <input type="text" name="description" className="form-control" onChange={formik.handleChange}/>
                    </div>
                </div>
                <div>
                    <label className="form-label">Url</label>
                    <div>
                        <input type="url" name="url" className="form-control" onChange={formik.handleChange}/>
                    </div>
                </div>
                <div>
                    <label className="form-label">Views</label>
                    <div>
                        <input type="number" name="views" className="form-control" onChange={formik.handleChange}/>
                    </div>
                </div>
                <div>
                    <label className="form-label">Likes</label>
                    <div>
                        <input type="number" name="likes" className="form-control" onChange={formik.handleChange}/>
                    </div>
                </div>
                <div>
                    <label className="form-label">Dislikes</label>
                    <div>
                        <input type="number" name="dislikes" className="form-control" onChange={formik.handleChange}/>
                    </div>
                </div>
                <div>
                    <label className="form-label">Categories</label>
                    <select name="categories" id="" className="form-select" onChange={formik.handleChange}>
                        {
                            categories.map((data)=>
                                <option key={data.category_id} value={data.category_name}>{data.category_name}</option>
                            )
                        }
                    </select>
                </div>
                <div className="mt-4">
                    <button type="submit" className="btn btn-outline-primary w-100">Add Video</button>
                </div>
            </form>
        </div>  
    )
}