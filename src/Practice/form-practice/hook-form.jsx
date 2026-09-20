import { useFormik } from "formik"
import { useRef, useState } from "react"
import * as yup from "yup"
import { minLength } from "zod"
import { FormState, useForm } from "react-hook-form"
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
export function HookForm(){

    const registrationSchema = z.object({
        Username : z.string().min(1, "username required").min(4, "name too short"),
        Email : z.string().min(1, "email required").refine((data)=>data.endsWith("@gmail.com"),{message : "invalid email"}),
        CreatePassword : z.string().min(1,"password required"),
        ConfirmPassword : z.string().min(1, "password can't be empty")
    })
    .refine((data)=>
        data.CreatePassword === data.ConfirmPassword,
        {
            message : "password didn't match",
            path : ["ConfirmPassword"]
        }
    )

    const {register, handleSubmit,getValues, formState:{errors}} = useForm({resolver:zodResolver(registrationSchema)})

    function onsubmit(data){
        console.log(data)
    }

    return(
        <div className="container-fluid">
            <form className="w-25 p-4 border border-1 rounded rounded-1 shadow" onSubmit={handleSubmit(onsubmit)}>
                <h3>Registration</h3>
                <div>
                    <label htmlFor="" className="form-label">Username</label>
                    <div>
                        {/* <input type="text" name="Username" className="form-control" {...register("Username",{required:"Username required", minLength:{value:4, message:"name too short"}})}/> */}
                        <input type="text" name="Username" className="form-control" {...register("Username")}/>
                    </div>
                    {
                        errors.Username && (<p className="text-danger">{errors.Username.message}</p>)
                    }
                </div>
                <div>
                    <label htmlFor="" className="form-label">Email</label>
                    <div>
                        {/* <input type="text" name="Email" className="form-control" {...register("Email", {required:"email required", validate:(value)=>value.endsWith("@gmail.com") || "invalid email"})}/> */}
                        <input type="text" name="Email" className="form-control" {...register("Email")}/>
                    </div>
                    {
                        errors.Email && (<p className="text-danger">{errors.Email.message}</p>)
                    }
                </div>
                <div>
                    <label htmlFor="" className="form-label">Create Password</label>
                    <div>
                        {/* <input type="text" name="CreatePassword" className="form-control" {...register("CreatePassword", {required:"password required", pattern:{value: /^.{8,16}$/, message:"password between 8 to 16 character"}})}/> */}
                        <input type="text" name="CreatePassword" className="form-control" {...register("CreatePassword")}/>
                    </div>
                    {
                        errors.CreatePassword && (<p className="text-danger">{errors.CreatePassword.message}</p>)
                    }
                </div>
                <div>
                    <label htmlFor="" className="form-label">Confirm Password</label>
                    <div>
                        {/* <input type="text" name="ConfirmPassword" className="form-control" {...register("ConfirmPassword", {required:"password can't be empty", validate:(value)=>value === getValues("CreatePassword") || "password doesn't match"})}/> */}
                        <input type="text" name="ConfirmPassword" className="form-control" {...register("ConfirmPassword")}/>
                    </div>
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