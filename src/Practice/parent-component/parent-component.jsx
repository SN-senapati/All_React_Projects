import { Child } from "../child-component/child-component"
export function Parent(){

    const student = [
        {
            name : "kadali",
            course : "java",
            duration : "6months"
        },
        {
            name : "damera",
            course : "C",
            duration : "3months"
        },
        {
            name : "kakharu",
            course : "python",
            duration : "6months"
        }
    ]
    
    return (
        <div>
            <Child caption="Student Details" student={student}/>
        </div>
    )
}