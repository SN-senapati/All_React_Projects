import { useState } from "react"
import "./DiceRoller.css"
export function DiceRoller(){
    const [number, setNumber] = useState(1)
    const [number2, setNumber2] = useState(1)
    function diceClick(){
        const randomNumber = Math.floor(Math.random() * 6) + 1
        const randomNumber2 = Math.floor(Math.random() * 6) + 1
        setNumber(randomNumber)
        setNumber2(randomNumber2)
    }
    console.log("hello world")
    const position = {
        1 : [[2,2]],
        2 : [[1,1], [3,3]],
        3 : [[1,1], [2,2], [3,3]],
        4 : [[1,1], [1,3], [3,1], [3,3]],
        5 : [[1,1], [1,3], [2,2], [3,1], [3,3]],
        6 : [[1,1], [1,3], [2,1], [2,3], [3,1], [3,3]]
    }
   return(
    <div className="p-4">
        <div className="border border-2 d-flex justify-content-around align-items-center w-25 p-4">
            <div className="dice rounded rounded-4">
                {
                    position[number].map(([row,column], index)=>
                        <span key={index} className="bg-white rounded rounded-circle" style={{gridRow:row, gridColumn:column}}></span>
                    )
                }
            </div>
            <div className="dice rounded rounded-4">
                {
                    position[number2].map(([row,column], index)=>
                        <span key={index} className="bg-white rounded rounded-circle" style={{gridRow:row, gridColumn:column}}></span>
                    )
                }
            </div>
        </div>
        <button className="btn btn-outline-primary mt-4" onClick={diceClick}>Role</button>
    </div>
   )
}
