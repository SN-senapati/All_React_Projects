import { useParams } from "react-router-dom"

export function Details(){
    const params = useParams()
    return (
        <div className="container-fluid p-4">
            <h3>Product Details</h3>
            <dl>
                <dt>Product Id</dt>
                <dd>{params.id}</dd>
                <dt>Product Name</dt>
                <dd>{params.name}</dd>
                <dt>Product Price</dt>
                <dd>{params.price}</dd>
            </dl>
        </div>
    )
}