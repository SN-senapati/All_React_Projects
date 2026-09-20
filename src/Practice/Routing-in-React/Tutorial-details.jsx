import { useParams } from "react-router-dom"

export function TutorialDetails(){
    const params = useParams()
    return(
        <div>
            <h3>Product Details</h3>
            <dl>
                <dt>Id</dt>
                <dd>{params.id}</dd>
                <dt>Name</dt>
                <dd>{params.name}</dd>
                <dt>Price</dt>
                <dd>{params.price}</dd>
            </dl>
        </div>
    )
}