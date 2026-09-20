import { useReducer } from "react"

const initialState = {
    count : 0
}

function reducer(state, action){
    if(action.type === "Increment"){
        return{
            count : state.count + 1
        }
    }
    if(action.type === "Decrement"){
        return{
            count : state.count - 1
        }
    }
    if(action.type === "Reset"){
        return{
            count : 0
        }
    }
    return state;
}
export function UseReducerExmaple(){
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <div className="p-4">
            <h2>Use Reducer</h2>
            <h2>{state.count}</h2>
            <div className="input-group">
                <button className="btn btn-outline-danger" onClick={()=>dispatch({type:"Increment"})}>+</button>
                <button className="btn btn-outline-danger" onClick={()=>dispatch({type:"Decrement"})}>-</button>
                <button className="btn btn-outline-danger" onClick={()=>dispatch({type:"Reset"})}>Reset</button>
            </div>
        </div>
    )
}