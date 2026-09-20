import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import { useFetchApi } from "../../hooks/use-fetch-api"
// import { useCaptcha } from "../../hooks/use-captcha"

export function AdminLogin(){
    
    // const categories = useFetchApi("http://localhost:4400/categories")
    const [cookies, setCookie, removeCookie] = useCookies(['admin_id'])
    // const code = useCaptcha()
    const [msg, setMsg] = useState({
        admin_id:"",
        password:""
    })
    function ValidateUser(admin){
        let errors = {}

        if(admin.admin_id.length === 0){
            errors.admin_id = "admin_id required..."
            setMsg("")
        }

        if(admin.password.length === 0){
            errors.password = "password required"
            setMsg("")
        }

        return errors
    }

    const navigate = useNavigate()
    const formik = useFormik({
        initialValues : {
            admin_id : "",
            password : ""
        },
        validate : ValidateUser,
        onSubmit:((admin)=>
            axios.get("http://localhost:4400/admin")
            .then((res)=>{
                    let result = res.data.find((items)=>
                        items.admin_id === admin.admin_id
                    )
                    if(result){
                        if(result.password === admin.password){
                            setCookie("admin_id",admin.admin_id)
                            navigate("/admin_dashboard")    
                        }else{
                            // alert("invalid password")
                            setMsg({
                                admin_id:"",
                                password:"invalid password"
                            })
                        }
                    }
                    else{
                        // alert("invalid id")
                        setMsg({
                            admin_id:"invalid id",
                            password:""
                        })
                    }
                }
            )
        )
    })
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:"80vh"}}>
            <form action="" onSubmit={formik.handleSubmit} className="w-25 shadow-lg p-4 border rounded border-dark-subtle">
                <h3 className="text-primary text-center bi bi-door-closed">Sign in</h3>
                <div>
                    <label htmlFor="" className="form-label">Admin id</label>
                    <div>
                        <input type="text" className="form-control" name="admin_id" onChange={formik.handleChange}/>
                    </div>
                    <div className="text-danger">{formik.errors.admin_id}</div>
                    <div className="text-danger">{msg.admin_id}</div>
                </div>
                <div>
                    <label htmlFor="" className="form-label">Password</label>
                    <div>
                        <input type="text" className="form-control" name="password" onChange={formik.handleChange}/>
                    </div>
                    <div className="text-danger">{formik.errors.password}</div>
                    <div className="text-danger">{msg.password}</div>
                </div>
                {/* <div>{code}</div> */}
                <button className="btn btn-outline-primary mt-4 w-100" type="submit">Login</button>
            </form>
            {/* <ul>
                {
                    categories.map((cate)=>
                        <li key={cate.id}>{cate.category_name}</li>
                    )
                }
            </ul> */}
        </div>
    )
}