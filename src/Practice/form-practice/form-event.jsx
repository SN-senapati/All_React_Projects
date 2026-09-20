import { useFormik } from "formik"
import { useRef, useState } from "react"
import * as yup from "yup"
export function FormEventPractice(){

    // const [username, setUsername] = useState("")

    // function handleSubmit(e){
    //     e.preventDefault()
    //     console.log(username)
    // }

    // const inputRef = useRef(null)

    // function handleSubmit(e){
    //     e.preventDefault()
    //     console.log(inputRef.current.value)
    // }

    // function handleSubmit(e){
    //     e.preventDefault()
    //     let data = new FormData(e.target)
    //     console.log(data)
    //     // data.get("username")
    //     console.log(data.get("username"))
    // }

    // function ValidateUser(user){
    //     let errors = {}
    //     let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    //     if(user.Username.length === 0){
    //         errors.Username = "Username required"
    //     }else if(user.Username.length < 4){
    //         errors.Username ="Username too short"
    //     }

    //     if(!user.Email){
    //         errors.Email = "Email required"
    //     }else if(!pattern.test(user.Email)){
    //         errors.Email = "Invalid Email"
    //     }

    //     if(!user.CreatePassword){
    //         errors.CreatePassword = "Password required"
    //     }

    //     if(!user.ConfirmPassword){
    //         errors.ConfirmPassword = "Password required"
    //     }else if(user.CreatePassword !== user.ConfirmPassword){
    //         errors.ConfirmPassword = "Password doesn't match"
    //     }
    //     return errors;
    // }

    const formik = useFormik({
        initialValues : {
            Username : "",
            Email : "",
            CreatePassword : "",
            ConfirmPassword : ""
        },
        // validate : ValidateUser,
        validationSchema : yup.object({
            Username : yup.string().required("username required").min(4, "name too short"),
            Email : yup.string().email("invalid email").required("email required"),
            CreatePassword: yup.string().required("password required"),
            ConfirmPassword: yup.string().required("password required").oneOf([yup.ref("CreatePassword")],"password doesn't match")
        }),
        onSubmit : (user)=>{
            console.log(user)
        }
    })

    return(
        <div className="container-fluid">
            <form className="w-25 p-4 border border-1 rounded rounded-1 shadow" onSubmit={formik.handleSubmit}>
                <h3>Registration</h3>
                <div>
                    <label htmlFor="" className="form-label">Username</label>
                    <div>
                        <input type="text" name="Username" className="form-control" {...formik.getFieldProps("Username")}/>
                    </div>
                    <div className="text-danger">{formik.errors.Username}</div>
                </div>
                <div>
                    <label htmlFor="" className="form-label">Email</label>
                    <div>
                        <input type="email" className="form-control" name="Email" {...formik.getFieldProps("Email")}/>
                    </div>
                    <div className="text-danger">{formik.errors.Email}</div>
                </div>
                <div>
                    <label htmlFor="" className="form-label">Create Password</label>
                    <div>
                        <input type="password" className="form-control" name="CreatePassword" onChange={formik.handleChange}/>
                    </div>
                    <div className="text-danger">{formik.errors.CreatePassword}</div>
                </div>
                <div>
                    <label htmlFor="" className="form-label">Confirm Password</label>
                    <div>
                        <input type="password" className="form-control" name="ConfirmPassword" onChange={formik.handleChange}/>
                    </div>
                    <div className="text-danger">{formik.errors.ConfirmPassword }</div>
                </div>
                <div className="mt-4">
                    <button type="submit" className="btn btn-outline-primary w-100">Submit</button>
                </div>
            </form>
        </div>
    )
}