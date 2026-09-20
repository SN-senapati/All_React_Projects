import { useFormik } from "formik"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
export function FormikWithReactHookForm(){

    // function ValidateUser(user){
    //     const errors = {}
    //     if(!user.Username){
    //         errors.Username = "username required"
    //     }else if(user.Username.length < 4){
    //         errors.Username = "name is too short"
    //     }

    //     if(!user.Email){
    //         errors.Email = "email required"
    //     }

    //     if(!user.CreatePassword){
    //         errors.CreatePassword = "password required"
    //     }else if(user.CreatePassword.length <8 || user.CreatePassword.length > 16){
    //         errors.CreatePassword = "Password must contain 8 to 16 chars only"
    //     }

    //     if(!user.ConfirmPassword){
    //         errors.ConfirmPassword = "Password can't be empty"
    //     }else if(user.CreatePassword !== user.ConfirmPassword){
    //         errors.ConfirmPassword = "Password doesn't match"
    //     }

    //     return errors;

    // }

    // const formik = useFormik({
    //     initialValues : {
    //         Username : "",
    //         Email : "",
    //         CreatePassword : "",
    //         ConfirmPassword : ""
    //     },
    //     validate : ValidateUser,
    //     validationSchema : Yup.object({
    //         Username : Yup.string().required("username required").min(4, "name too short"),
    //         Email : Yup.string().email("invalid mail").required("email required"),
    //         CreatePassword : Yup.string().required("password required"),
    //         ConfirmPassword : Yup.string().required("password can't be empty").oneOf([Yup.ref("CreatePassword")],"password doesn't match")
    //     }),
    //     onSubmit : (user)=>{
    //         console.log(user)
    //     }
    // })

    const registrationSchema = z.object({
        Username : z.string().min(1, "username required").min(4, "name too short"),
        Email : z.string().min(1, "mail required").refine((data)=>data.endsWith("@gmail.com"),{message :"invalid mail"}),
        CreatePassword : z.string().min(1, "psw required"),
        ConfirmPassword : z.string().min(1, "psw can't be empty")
    })
    .refine((data)=>data.CreatePassword === data.ConfirmPassword, {message :"password not matched", path:["ConfirmPassword"]})


    const {register, handleSubmit, getValues, formState:{errors}} = useForm({resolver:zodResolver(registrationSchema)})
    function onsubmit(data){
        console.log(data)
    }
    return(
        <div className="p-4">
            <form className="w-25 p-4 border border-1 rounded rounded-1 shadow" onSubmit={handleSubmit(onsubmit)}>
                <h3>Registration</h3>
                <div>
                    <label htmlFor="" className="form-label">Username</label>
                    <div>
                        {/* <input type="text" name="Username" className="form-control" onChange={formik.handleChange}/> */}
                        {/* <input type="text" name="Username" className="form-control" {...register("Username", {required : "username required", minLength:{value : 4, message:"name too short"}})}/> */}
                        <input type="text" name="Username" className="form-control" {...register("Username")}/>
                    </div>
                    {/* <div className="text-danger">{formik.errors.Username}</div> */}
                    {
                        errors.Username && (<p className="text-danger">{errors.Username.message}</p>)
                    }
                </div>
                <div>
                    <label htmlFor="" className="form-label">Email</label>
                    <div>
                        {/* <input type="email" className="form-control" name="Email" {...formik.getFieldProps("Email")}/> */}
                        {/* <input type="text" name="Email" className="form-control" {...register("Email", {required : "email required", validate:(value)=>value.endsWith("@gmail.com") || "invalid mail"})}/> */}
                        <input type="text" name="Email" className="form-control" {...register("Email")}/>
                    </div>
                    {/* <div className="text-danger">{formik.errors.Email}</div> */}
                    {
                        errors.Email && (<p className="text-danger">{errors.Email.message}</p>)
                    }
                </div>
                <div>
                    <label htmlFor="" className="form-label">Create Password</label>
                    <div>
                        {/* <input type="password" className="form-control" name="CreatePassword" {...register("CreatePassword",{required:"password required"})}/> */}
                        <input type="text" name="CreatePassword" className="form-control" {...register("CreatePassword")}/>
                    </div>
                    {/* <div className="text-danger">{formik.errors.CreatePassword}</div> */}
                    {
                        errors.CreatePassword && (<p className="text-danger">{errors.CreatePassword.message}</p>)
                    }
                </div>
                <div>
                    <label htmlFor="" className="form-label">Confirm Password</label>
                    <div>
                        {/* <input type="password" className="form-control" name="ConfirmPassword" onChange={formik.handleChange}/> */}
                        {/* <input type="text" name="ConfirmPassword" className="form-control" {...register("ConfirmPassword", {required:"password can't be empty", validate:(value)=>value === getValues("CreatePassword") || "Password doesn't match"})}/> */}
                        <input type="text" name="ConfirmPassword" className="form-control" {...register("ConfirmPassword")}/>
                    </div>
                    {/* <div className="text-danger">{formik.errors.ConfirmPassword}</div> */}
                    {
                        errors.ConfirmPassword && (<p className="text-danger">{errors.ConfirmPassword.message}</p>)
                    }
                </div>
                <div className="mt-4">
                    <button type="submit" className="btn btn-outline-primary w-100">Submit</button>
                </div>
            </form>
        </div>
    )
}