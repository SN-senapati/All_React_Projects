import { DataGrid } from "../controlled-component/data-grid";

export function Demo(){
    return (
        <div className="container-fluid p-4">
            <DataGrid caption = "product Details" data={[{Name:"Tv",Price:23000}]}/>
            <DataGrid data={[{Name:"Tv",Price:23000}]}/>
        </div>
    )
}