import { useFormik } from "formik"
import * as yup from "yup"
import { useRef,useState } from "react"
export function FormEventEx(){
    // let username = useRef(null)
    const [uname,setUname] = useState(null)
    const [error, setError] = useState("")
    const [psw, setPsw] = useState(null)
    function handleSubmit(e){
        e.preventDefault()
        const value = e.target.username.value
        if(value !== value.toUpperCase()){
            setError("input should be in capital letter")
        }else{
            setUname(e.target.username.value)
            setError("")
        }
        // e.preventDefault()
        setPsw(e.target.password.value)
    }
    return(
        <div className="container-fluid p-4">
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" className="form-control w-25"/>
                <div className="text-danger">{error}</div>
                <input type="password" name="password" className="form-control w-25"/>
                <button className="btn btn-outline-info">Submit</button>
            </form>
            <div>
                <dl>
                    <dt>username</dt>
                    <dd>{uname}</dd>
                    <dt>password</dt>
                    <dd>{psw}</dd>
                </dl>
            </div>
        </div>
    )
}



const schema = yup.object({
    username : yup.string().required("username required").min(4, "name is too short"),
    email : yup.string().email("invalid email").required("email required"),
    mobile : yup.string().required("mobile required").matches(/\+91\d{10}/, "IND format mandatory").max(13, "use 10 digits only"),
    createPassword : yup.string().required("password required").min(4,"use more than 4 char"),
    confirmPassword : yup.string().oneOf([yup.ref("createPassword")], "password should match")
})

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


export function FormEventEx2() {

    const {register, handleSubmit, formState:{errors}} = useForm({resolver:yupResolver(schema),mode:"onChange"})
    function onSubmit(data){
        console.log(data)
    }
    return (
        <div className="container-fluid p-4">
            <form action="" className="w-25 p-4 shadow-lg rounded rounded-3 border" onSubmit={handleSubmit(onSubmit)}>
                <h3>Registration Form</h3>
                <div className="mt-4">
                    <label htmlFor="" className="form-label">Username</label>
                    <div>
                        <input type="text" className="form-control" {...register("username")}/>
                    </div>
                    <div className="text-danger">{errors.username?.message}</div>
                </div>
                <div className="my-2">
                    <label htmlFor="" className="form-label">Email</label>
                    <div>
                        <input type="text" className="form-control" {...register("email")}/>
                    </div>
                    <div className="text-danger">{errors.email?.message}</div>
                </div>
                <div>
                    <label htmlFor="" className="form-label">Mobile</label>
                    <div>
                        <input type="text" className="form-control" {...register("mobile")}/>
                    </div>
                    <div className="text-danger">{errors.mobile?.message}</div>
                </div>
                <div className="my-2">
                    <label htmlFor="" className="form-label">Create Password</label>
                    <div>
                        <input type="text" className="form-control" {...register("createPassword")}/>
                    </div>
                    <div className="text-danger">{errors.createPassword?.message}</div>
                </div>
                <div>
                    <label htmlFor="" className="form-label">Confirm Password</label>
                    <div>
                        <input type="text" className="form-control" {...register("confirmPassword")}/>
                    </div>
                    <div className="text-danger">{errors.confirmPassword?.message}</div>
                </div>
                <div className="mt-2">
                    <button className="btn btn-outline-primary w-100" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}