import { useState } from "react"

export function TodoItem({todo,index, deleteTodo,edit, startEdit, saveTodo}) {
    const [text, setText] = useState(todo.text)
    return (
        <div className="mt-1 w-75" style={{margin:"auto"}}>
            <ul className="m-0 list-unstyled d-flex align-items-center justify-content-between">
                <li className=" w-100 d-flex align-items-center justify-content-between mb-1">
                    {/* <div className="border border-1 p-2 text-bg-light form-control">{todo.text}</div> */}
                    {
                        edit === todo.id ? (<input className="form-control" value={text} onChange={(e)=>setText(e.target.value)} autoFocus/>) : (<div className="border border-1 p-2 text-bg-light form-control">{todo.text}</div>)
                    }
                    <div className="d-flex">
                        {/* <button className="bi bi-pen-fill btn btn-dark mx-2"></button> */}
                        {
                            edit === todo.id ? <button className="btn btn-success mx-2" onClick={()=>saveTodo(todo.id, text)}>save</button> : <button className="bi bi-pen-fill btn btn-dark mx-2" onClick={()=>startEdit(todo.id)}></button>
                        }
                        <button className="bi bi-trash btn btn-secondary" onClick={()=>deleteTodo(todo.id)}></button>
                    </div>
                </li>
            </ul>
        </div>
    )

}
