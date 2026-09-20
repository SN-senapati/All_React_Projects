export function Child(props){
    return(
        <div className="container-fluid p-4">
            <table className="w-25 table table-bordered table-striped table-hover caption-top table-dark">
                <caption className="text-center fs-3 fw-bold">{props.caption}</caption>
                <thead className="text-center">
                    <tr>
                        {
                            Object.keys(props.student[0]).map((data,index)=>
                                <th key={index}>{data}</th>
                            )
                        }
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        props.student.map((data,index)=>
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.course}</td>
                                <td>{data.duration}</td>
                                <td>
                                    <button className="btn btn-danger bi bi-trash-fill"></button>
                                    <button className="btn btn-warning bi bi-pen-fill mx-2"></button>
                                </td>
                            </tr>
                        )
                    }   
                </tbody>
            </table>
        </div>
    )
}

// props {student : }