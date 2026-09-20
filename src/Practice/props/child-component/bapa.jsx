// import { Jepa } from "../parent-component/jepa"
export function Bapa({name,role,exp,onClick}){
    return(
       <div className="container-fluid p-4">
            <h3>Child</h3>
            <dl>
                <dt>Name</dt>
                <dd>{name}</dd>
                <dt>Role</dt>
                <dd>{role}</dd>
                <dt>Experience</dt>
                <dd>{exp}</dd>
            </dl>
            <button onClick={onClick} className="btn btn-outline-danger">click</button>
       </div>
    )
}