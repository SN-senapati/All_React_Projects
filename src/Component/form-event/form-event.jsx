// import { useRef } from "react"
// export function FormEvent(){

//     let userName = useRef()
//     function handleSubmit(e){
//         e.preventDefault()
//         // console.log(e.target.userName.value)
//         // console.log(userName.current.value)
//         let data = new FormData(e.target)    
//         console.log(data.get("userName"))
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input placeholder="Type something" type="text" name="userName" ref={userName}/>
//             <button type="submit">Submit</button>
//         </form>
//     )
// }

import { Formik, useFormik } from "formik"
import * as yup from "yup"
export function FormEvent(){    

    function ValidateUser(user){
        let errors = {}
            if(user.UserName.length === 0){
                errors.UserName = "UserName required..."
            }else if(user.UserName.length < 4){
                errors.UserName = "Name is too short"
            }
            if(user.City === "-1"){
                errors.City = "Please select a city"
            }

            if(user.Mobile.length === 0){
                errors.Mobile = "Please enter a mobile number"
            }else {
                if(!user.Mobile.match(/\+91\d{10}/)){
                    errors.Mobile = "Invalid number, number should start with +91"
                }
            }

            return errors;
        }  

    const formik = useFormik({
        initialValues :{
            UserName : "",
            Email : "",
            Mobile : "",
            City : "-1"
        },
        validate : ValidateUser,
        // validationSchema : yup.object({
        //     UserName : yup.string().required("username required").min(4,"name too short"),
        //     Email : yup.string().email("invalid email").required("Email required"),
        //     Mobile : yup.string().required("mobile required").matches(/\+91\d{10}/,'invalid mobile +91 10 digits required').max(13,"invalid format")
        // }),
        onSubmit : (user)=>{
            console.log(user)
        }
    })

    return (
        <div className="container p-4">
            <form action="" className="w-25 border border-1 p-4 rounded rounded-2" onSubmit={formik.handleSubmit}>
                <h3 className="mb-4">Register User</h3>
                <div>
                    <label htmlFor="" className="form-label">UserName</label>
                    <div>
                        <input type="text" name="UserName" className="form-control" {...formik.getFieldProps("UserName")}/>
                    </div>
                    <div className="text-danger">{formik.errors.UserName}</div>
                </div>
                <div>
                    <label htmlFor="" className="form-label">Email</label>
                    <div>
                        <input type="" name="Email" className="form-control" onChange={formik.handleChange}/>
                    </div>
                    <div className="text-danger">{formik.errors.Email}</div>
                </div>
                <div>
                    <label htmlFor="" className="form-label">Mobile</label>
                    <div>
                        <input type="text" name="Mobile" className="form-control" onChange={formik.handleChange}/>
                    </div>
                    <div className="text-danger">{formik.errors.Mobile}</div>
                </div>
                <div>
                    <label htmlFor="" className="form-label">City</label>
                    <div>
                        <select name="City" id="" className="form-select" onChange={formik.handleChange}>
                            <option value = "-1">Select City</option>
                            <option value="DKl">DKL</option>
                            <option value="Angul">Angul</option>
                            <option value="Khordha">Khurdha</option>
                        </select>
                    </div>
                    <div className="text-danger">{formik.errors.City}</div>
                </div>
                <div className="my-4">
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </div>
            </form>
        </div>
    )
}