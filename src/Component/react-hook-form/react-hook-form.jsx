import { useForm } from "react-hook-form"
import { Navbar } from "../controlled-component/navbar"
export function ReactHookForm(){

    const {register, handleSubmit,formState:{errors} } = useForm()

    const  submit = (data)=> {
        console.log(data)
    }
    return (
        <div className="container-fluid p-4" onSubmit={handleSubmit(submit)}>
            <Navbar brand="Shopping" theme="bg-dark navbar-dark" menu={["Home", "Shopping", "Blog", "Services"]}  dropdown={["Action","Another Action","Something Else"]} />
            <Navbar brand="Amazon" menu={["offers","health","mobile","fashion"]} dropdown={["Action","Another Action","Something Else"]} theme="bg-dark navbar-dark"/>
            <form action="" className="p-4 border border-2 shadow-sm rounded rounded-2 w-25 bg-secondary-subtle">
                <h3 className="bi bi-person-circle mb-4"> Register User</h3>
                <div>
                    <label htmlFor="" className="form-label">UserName</label>
                    <div>
                        <input type="text" name="UserName" className="form-control"  {...register("UserName",{required:true, minLength:4})}/>
                    </div>
                    <div className="text-danger">
                        {
                            (errors.UserName?.type === "required")?<span>username required</span>:<span></span> &&
                            (errors.UserName?.type === "minLength")?<span>Name too short</span>:<span></span>
                        }
                    </div>
                </div>
                <div>
                    <label htmlFor="" className="form-label">Mobile</label>
                    <div>
                        <input type="text" name="Mobile" className="form-control" {...register("Mobile", {required:true, pattern:/\+91\d{10}/})}/>
                    </div>
                    <div className="text-danger">
                        {
                            (errors.Mobile?.type === "required")?<span>Mobile required</span>:<span></span> &&
                            (errors.Mobile?.type === "pattern")?<span>Invalid pattern use ind pattern</span>:<span></span>
                        }
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </div>
            </form>
        </div>
    )
}
