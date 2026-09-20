// import { TodoForm } from "./components/Todo-form";
// import { TodoList } from "./components/Todo-list";
import { useState } from "react";
import { TodoForm } from "./components/Todo-form";
import { TodoList } from "./components/Todo-list";

export function TodoApp(){
    const [todos, setTodos] = useState([])
    const [edit, setEdit] = useState(null)
    function addTodo(data){
        const isExist = todos.some((todo)=>todo.text.toLowerCase() === data.todo.trim().toLowerCase())
        if(isExist){
            alert("Task already exist.First you have to complete the task")
            return
        }
        const newTodo = {
            id: Date.now(),
            text : data.todo.trim(),
            completed : false
        };            
       setTodos((prev)=> [...prev, newTodo])
    }

    function deleteTodo(id){
        setTodos((prev)=>prev.filter((value,index)=>value.id !== id))
    }
    function startEdit(id){
        setEdit(id)
    }
    function saveTodo(id, newText){
        setTodos((prev)=>
            prev.map((value,index)=>
                value.id === id ? {...value, text: newText} : value
            )
        )
        setEdit(null)
    }

    return (
        <div className="container-fluid mt-5 w-50">
            <h1 className="text-center">Todo List</h1>
            <div className="border border-2">
                <TodoForm addTodo = {addTodo}/>
                <TodoList todos={todos} deleteTodo={deleteTodo} edit={edit} startEdit={startEdit} saveTodo={saveTodo}/>
            </div>
        </div>
    )
}