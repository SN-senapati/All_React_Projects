// App
// │
// ├── Dashboard
// │     │
// │     ├── Sidebar
// │     │      │
// │     │      └── UserCard
// │     │
// │     └── Content
// │
// └── Footer


export function PropsExample(){
    let user = {
        id: 1,
        name: "Sudipta",
        role: "Frontend Developer",
    }
    return(
        <div>
            <Dashboard user={user}/>
        </div>
    )
}

export function Dashboard({user}){
    return (
        <>
            <Sidebar user={user}/>
        </>
    )
}
export function Sidebar({user}){
    return (
        <>
            <Usercard user={user}/>     
        </>
    )
}
export function Usercard({user}){
    const {id,name,role} = user
    return (
        <>
            <table className="table table-bordered table-striped table-hover caption-top text-bg-dark">
                <caption className="text-center fs-3 fw-bold">Usercard</caption>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{role}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}