export function Navbar(props){
    return (
        <div className="container-fluid p-4">
            <nav className={`navbar navbar-expand-lg ${props.theme} p-4`}>
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-3" href="#">{props.brand}</a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav">
                            {
                                props.menu.map((items,index)=>{
                                    return <li className="navbar-item" key={index}><a href="#" className="nav-link">{items}</a></li>
                                })
                            }
                            {/* <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Link</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li> */}
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Dropdown</a>
                                <ul className="dropdown-menu">
                                    {
                                        props.dropdown.map((items,index)=>{
                                            return <li key={index}><a href="#" className="dropdown-item">{items}</a></li>
                                        })
                                    }
                                    {/* <li><a href="#" className="dropdown-item">Action</a></li>
                                    <li><a href="#" className="dropdown-item">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a href="#" className="dropdown-item">Something else here</a></li> */}
                                </ul>
                            </li>
                        </ul>
                        <form action="" className="d-flex" role="search">
                            <input type="search" name="search" className="form-control mx-2" placeholder="Search"/>
                            <button className="btn btn-outline-secondary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}