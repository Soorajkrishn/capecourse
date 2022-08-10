import './style.css'
import { Link } from "react-router-dom"

function Topbar(){
    let data=localStorage.getItem('name')
    console.log(data)


    const getAdminLogout=()=>{
        localStorage.clear()
    }
    return(
        <>

            <div className="card-body ">
                <div className="row gx-4">
                    <div className="col-auto">
                        <div className="btn-group">
                            <button className="btn btn-secondary btn-lg dropdown-toggle success topbar-btn" type="button" data-toggle="dropdown" aria-expanded="false">
                                TUTORIALS
                            </button>
                            <div className="dropdown-menu">
                                <ul>
                                    <li><Link to='/tutorial'>HTML</Link></li>
                                    <li><Link to='#'>CSS</Link></li>
                                    <li><Link to='#'>JAVASCRIPT</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto my-auto text-center">
                        <div className="h-100">
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                        <div className="nav-wrapper position-relative end-0">
                            <ul className="nav nav-pills nav-fill p-1" role="tablist">
                                <li className="nav-item">
                                    <Link to='/courselist'><button className="btn topbar-btn">Courses</button></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/login'><button className="btn topbar-btn">Login</button></Link>
                                </li>
                                <li className="nav-item">
                                    
                                    {data?<Link to='/'><button className="btn topbar-btn" onClick={getAdminLogout}>Admin Logout</button></Link>:<Link to='/adminlogin'><button className="btn topbar-btn">Admin Login</button></Link>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Topbar