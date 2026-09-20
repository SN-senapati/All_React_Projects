import { TodoItem } from "./Todo-item"
export function TodoList({todos,deleteTodo,edit,startEdit,saveTodo}) {
    
    if(todos.length === 0){
        return (
            <div className="mt-4 d-flex justify-content-center">
                <div className="alert alert-secondary text-center w-75">
                    Not Found
                </div>
            </div>
        )
    }

    return(
        <div className="mt-4">
            {
                todos.map((data,index)=>{
                    return <TodoItem key={data.id} todo={data} index={index} deleteTodo={deleteTodo} edit={edit} startEdit={startEdit} saveTodo={saveTodo}></TodoItem>
                })
            }
        </div>
    )

}
