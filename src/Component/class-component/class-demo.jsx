import React from "react"
export class ClassDemo extends React.Component{
    constructor(){
        super()
        this.state = {
            category : ['men','women','kids'],
            product : {id:1,name:'tv'},
            title : "Amazon",
            count : 0
        }
    }

    btnClick=()=>{
        this.setState({
            count : this.state.count + 1
        })
    }

    render(){
        return(
            <div className="container-fluid p-4">
                <h3>{this.state.title}</h3>
                <ul>
                    {
                        this.state.category.map((data,i)=>
                            <li key={i}>{data}</li>
                        )
                    }
                </ul>
                <dl>
                    <dt>id</dt>
                    <dd>{this.state.product.id}</dd>
                    <dt>name</dt>
                    <dd>{this.state.product.name}</dd>
                </dl>
                <button className="btn btn-primary" onClick={this.btnClick}>click</button>
                <div>{this.state.count}</div>
            </div>
        )
    }
}