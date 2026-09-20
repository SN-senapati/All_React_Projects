import { useContext, useEffect } from "react"
import {SearchContext} from "./search-product"
export function SearchResult({onAddToCartClick}){
    let context = useContext(SearchContext)

    function handleAddClick(items){
        onAddToCartClick(items)
    }
    return (
        <div className="d-flex flex-wrap gap-2 justify-content-center">
            {
                context.map((items,index)=>
                    <div className="card" key={index}>
                        <div className="card-header">
                            <img src={items.image} alt="" style={{width:"200px",height:"200px"}}/>
                        </div>
                        <div className="card-body py-1">
                            <dl className="m-0">
                                <dt>Price</dt>
                                <dd>{items.price}</dd>
                                <dt>Ratings</dt>
                                <dd>{items.rating.rate}</dd>
                            </dl>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-dark w-100" onClick={()=>handleAddClick(items)}>Add to Cart</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}