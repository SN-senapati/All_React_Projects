// import { useState } from "react"
// export function UseReducerEx(){
//     const [state, setState] = useState(0)

import { useReducer } from "react"
import { defaultLocale } from "yup"

//     function increament(){
//         setState(state+1)
//     }

//     function decreament(){
//         setState(state - 1)
//     }
//     return(
//         <div className="container-fluid p-4">
//             <div className="d-flex align-items-center">
//                 <button className="btn btn-outline-dark me-2" onClick={increament}>Increament</button>
//                 <div className="border border-2 rounded rounded-3 p-2 d-flex justify-content-center align-items-center" style={{width:"50px", height:"40px"}}>{state}</div>
//                 <button className="btn btn-outline-dark ms-2" onClick={decreament}>decreament</button>
//             </div>
//         </div>
//     )

// }

// 17. Write a reducer for a bank account.

const initialState = {
    balance : 1000,
    msg : ""
}

function reducer(state,action){
    switch(action.type){
        case "deposite" :
            return {
                balance : state.balance + 500
            }
        case "withdraw" :

            if(state.balance === 0){
                return {
                    balance : 0,
                    msg : state.msg = "insufficient balance to withdraw"
                }
            }else{
                return{
                    balance : state.balance - 500
                }
            }
            // return {
            //     if(balance === 500){

            //     }
            //     balance : state.balance - 500
            // }
        case "reset" :
            return {
                balance : 1000
            }
        default :
            return state
    }
}

export function UseReducerEx(){
    
    const [state, dispatch] = useReducer(reducer, initialState)

    function handleDeposite(){
        dispatch({type:"deposite"})
    }
    function handleWithdraw(){
        dispatch({type:"withdraw"})
    }
    function handleReset(){
        dispatch({type:"reset"})
    }
    return(
        <div className="container-fluid p-4 bg-light" >
            <div className="d-flex justify-content-between p-2 gap-2 w-50">
                <div className="rounded rounded-2 p-4 bg-white" style={{width:"70%"}}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <div><h6>Total Available Balance</h6></div>
                            <div className="fs-3 fw-bold">
                                <span className="bi bi-currency-rupee"></span>
                                <span>{state.balance}</span>
                            </div>
                            <div className="text-danger">{state.msg}</div>
                        </div>
                        <div className="bi bi-bank2 text-secondary fw-bolder" style={{fontSize:"80px"}}></div>
                    </div>
                    <div className="d-flex justify-content-start align-items-center mt-3">
                        <div>
                            <button className="btn btn-success" onClick={handleDeposite}><span className="bi bi-plus-circle"></span> <span>Deposite</span></button>
                        </div>
                        <div className="mx-2">
                            <button className="btn btn-outline-secondary" onClick={handleWithdraw}><span className="bi bi-dash-circle"></span> <span>Withdraw</span></button>
                        </div>
                        <div><button className="btn" onClick={handleReset}><span className="bi bi-bootstrap-reboot"></span> <span>Reset</span></button></div>
                    </div>
                </div>
                <div className="text-bg-dark p-4 rounded rounded-2 w-50">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="bi bi-spotify text-success fs-5"></div>
                        <div className="text-secondary fw-bold">NOVA PLATINUM</div>
                    </div>
                    <div className="my-4">
                        <div className="text-secondary">Card Numbur</div>
                        <div><span>****</span> <span>****</span> <span>****</span> <span>8821</span></div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <div className="text-secondary">CARD HOLDER</div>
                            <div>ALEX STERLING</div>
                        </div>
                        <div>
                            <img src="./public/images/master-card.png" width={30} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}