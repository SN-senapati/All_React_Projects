export function DataGrid(props){
    return (
        <div>
            <table className="table table-hover caption-top table-responsive table-stripped w-25 table-bordered">
                <caption className="text-center">{props.caption}</caption>
                <thead>
                    <tr className="text-center">
                        {
                            Object.keys(props.data[0]).map((data,index)=>
                                <th key={index}>{data}</th>
                            )
                        }
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((items,i)=>
                            <tr key={i} className="text-center">
                                {
                                    Object.keys(items).map((field,index)=>
                                        <td key={index}>{items[field]}</td>
                                    )
                                }
                                <td>
                                    <button className="bi bi-trash btn btn-danger me-2"></button>
                                    <button className="btn btn-warning bi bi-pen-fill"></button>
                                </td>
                            </tr>
                        )
                        
                    }
                </tbody>
                    
            </table>
        </div>
    )
}