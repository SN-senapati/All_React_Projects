import { useRef } from "react"
import { useFormik } from "formik"
import { Mobile } from "../Component/flipkart/mobiles"
import * as yup from "yup"
import { Formik, Field, Form,ErrorMessage } from "formik"
export function FormValidation(){

    // function ValidateUser(user){
    //     let errors = {}


    //     if(user.UserName.length === 0){
    //         errors.UserName = "Enter a UserName"
    //     }else if(user.UserName.length < 4){
    //         errors.UserName = "Name is too short "
    //     }

    //     if(user.Mobile.length === 0){
    //         errors.Mobile = "Enter a mobile number"
    //     }else if(!user.Mobile.match(/\+91\d{10}/)){
    //         errors.Mobile  = "Use an indain format +91 and 10 digits"
    //     }

    //     if(user.City === "-1"){
    //         errors.City = "Please select a city"
    //     }


    //     return errors
    // } 

//    const formik = useFormik({
//     initialValues : {
//         UserName : "",
//         Email : "",
//         Mobile : "",
//         City : "-1"
//     },   

    // validate : ValidateUser,
    // validationSchema : yup.object({
    //     UserName : yup.string().required("username required..").min(4, "Name too short"),
    //     Email : yup.string().email("invalid email").required("email required.."),
    //     Mobile : yup.string().required("Mobile required...").matches(/\+91\d{10}/,"use indian format - +91 and 10 digits"),
    //     City : yup.string().notOneOf(["-1"],"please select a city")
    // }),

//     onSubmit : (user)=>{
//         console.log(user)
//     }
//    })



    return (
        // <div className="container-fluid p-4">
        //     <form className="p-4 border border-1 text-bg-dark w-25" onSubmit={formik.handleSubmit}>
        //         <h3 className="bi bi-person-circle"> Register User</h3>
        //         <div>
        //             <label htmlFor=""  className="form-label">UserName</label>
        //             <div>
        //                 <input type="text" className="form-control" name="UserName" onChange={formik.handleChange}/>
        //             </div>
        //             <div className="text-danger">{formik.errors.UserName}</div>
        //         </div>
        //         <div>
        //             <label htmlFor="" className="form-label">Email</label>
        //             <div>
        //                 <input type="text" className="form-control" name="Email" onChange={formik.handleChange}/>
        //             </div>
        //             <div className="text-danger">{formik.errors.Email}</div>
        //         </div>
        //         <div>
        //             <label htmlFor="" className="form-label">Mobile</label>
        //             <div>
        //                 <input type="text" className="form-control" onChange={formik.handleChange} name="Mobile"/>
        //             </div>
        //             <div className="text-danger">{formik.errors.Mobile}</div>
        //         </div>
        //         <div>
        //             <label htmlFor="" className="form-label">City</label>
        //             <div>
        //                 <select name="City" id="" className="form-select" onChange={formik.handleChange}>
        //                     <option  value="-1">Select City</option>
        //                     <option value="DKL">DKL</option>
        //                     <option value="Angul">Angul</option>
        //                     <option value="Fulbani">Fulbani</option>
        //                 </select>
        //             </div>
        //             <div className="text-danger">{formik.errors.City}</div>
        //         </div>
        //         <button type="submit" className="btn btn-warning mt-4 w-100">Submit</button>
        //     </form>
        // </div>
        <div className="container-fluid p-4">
            <Formik initialValues={{
                UserName : "",
                Email : "",
                Mobile : "",
                City : "-1"
            }}
            validationSchema={yup.object({
                UserName : yup.string().required("UserName required..").min(4,"Name too short"),
                Email : yup.string().email("Invalid email").required("email required.."),
                Mobile : yup.string().required("Mobile required..").matches(/\+91\d{10}/, "use indian format - +91 and 10 digits"),
                City : yup.string().notOneOf(["-1"],"select a city first")
            })}
            onSubmit={(user)=>
                console.log(user)
            }>
                {
                    form =>
                        <Form className="p-4 border border-1 text-bg-dark w-25">
                    <h3 className="bi bi-person-circle"> Register User</h3>
                    <div>
                        <label htmlFor=""  className="form-label">UserName</label>
                        <div>
                            <Field type="text" className="form-control" name="UserName"/>
                        </div>
                        <div className="text-danger"><ErrorMessage name="UserName"/></div>
                    </div>
                    <div>
                        <label htmlFor="" className="form-label">Email</label>
                        <div>
                            <Field type="text" className="form-control" name="Email"/>
                        </div>
                        <div className="text-danger"><ErrorMessage name="Email"/></div>
                    </div>
                    <div>
                        <label htmlFor="" className="form-label">Mobile</label>
                        <div>
                            <Field type="text" className="form-control" name="Mobile"/>
                        </div>
                        <div className="text-danger"><ErrorMessage name="Mobile"/></div>
                    </div>
                    <div>
                        <label htmlFor="" className="form-label">City</label>
                        <div>
                            <Field as="select" name="City" id="" className="form-select">
                                <option  value="-1">Select City</option>
                                <option value="DKL">DKL</option>
                                <option value="Angul">Angul</option>
                                <option value="Fulbani">Fulbani</option>
                            </Field>
                        </div>
                        <div className="text-danger"><ErrorMessage name="City"/></div>
                    </div>                    
                    <button type="submit" className="btn btn-warning mt-4 w-100" disabled={(form.isValid)?false:true}>Submit</button>
                </Form>
                }
            </Formik>
        </div>
    )
}