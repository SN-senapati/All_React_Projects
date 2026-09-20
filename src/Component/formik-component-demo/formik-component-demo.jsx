import  * as yup from "yup"
import {Formik, Form, Field, ErrorMessage} from "formik"
export function FormikComponentDemo(){
    return (
        <div className="contianer-fluid p-4">
            <h3>Register user</h3>
            <Formik initialValues={{UserName : "", Mobile : ""}} validationSchema={yup.object({UserName : yup.string().required("UserName required").min(4,"Name too short"), mobile : yup.string().required("Mobile required..").matches(/\+91\d{10}/, "Invalid Mobile format, use Indian format - +91")})} onSubmit={(user)=>{console.log(user)}}>
                {
                    form =>
                    <Form className="w-25 border border-1 p-4">
                    <div>
                        <label className="form-label">UserName</label>
                        <div>
                            <Field type="text" className="form-control" name="UserName"/>   
                        </div>
                        <div className="text-danger"><ErrorMessage name="UserName"/></div>
                    </div>
                    <div>
                        <label className="form-label">Mobile</label>
                        <div>
                            <Field type="text" className="form-control" name="Mobile"/>   
                        </div>
                        <div className="text-danger"><ErrorMessage name="Mobile"/></div>
                    </div>
                    {/* {form.values.UserName} */}
                    {/* {console.log(form.errors.UserName)} */}
                    {/* {console.log(form.dirty)} */}
                    {/* {console.log(form.isValid)} */}
                    {/* {console.log(form.touched)} */}
                    <button type="submit" className="btn btn-primary w-25 mx-2 mt-4" disabled={(form.isValid)?false : true}>Submit</button>
                    <button type="submit" className="btn btn-primary w-25 mt-4" disabled={(form.dirty)?false : true}>Save</button>
                </Form>
                }
            </Formik>
        </div>
    )
}