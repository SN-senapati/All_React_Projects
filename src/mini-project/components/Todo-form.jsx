import { zodResolver } from "@hookform/resolvers/zod"
import { todoSchema } from "../schema/todo-schema"
import { useForm } from "react-hook-form"
export function TodoForm({addTodo}) {
    const {register,clearErrors, handleSubmit, reset, formState:{errors}} = useForm({resolver:zodResolver(todoSchema), mode:"onChange"})
    function onSubmit(data){    
        addTodo(data)
        reset()
    }
    return(
        <div className="d-flex justify-content-center mt-4">
            <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-9 pe-1">
                        <input type="text" className="form-control" {...register("todo")} onBlur={(e)=>{if(e.target.value.trim() === ""){clearErrors("todo")}}}/>
                        <div className="text-danger">{errors.todo?.message}</div>
                    </div>
                    <div className="col-3 ps-1">
                        <button className="btn btn-outline-dark w-100" type="submit">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}