import Topbar from "../../components/top bar";
import Footer from "../../components/Footer";

function Home(){

    return(
        <>
            <Topbar/>
            <div className="page-header position-relative" >
                <span className="mask bg-gradient-primary opacity-6"></span>
                    <div className="container pb-lg-9 pb-10 pt-7 postion-relative z-index-2">
                        <div className="row mt-4">
                            <div className="col-md-6 mx-auto text-center">
                                <h3 className="text-white">CAPE COURSE</h3>
                                <p className="text-white">Learn to Code and Get Free and Paid Courses from CAPE COURSE</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-7 mx-auto text-center">
                                <div className="nav-wrapper mt-5 position-relative z-index-2">
                                    <ul className="nav nav-pills nav-fill flex-row p-1" id="tabs-pricing" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 active" id="tabs-iconpricing-tab-1" data-bs-toggle="tab" href="#html" role="tab" aria-controls="html" aria-selected="true">
                                            TUTORIALS
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-n8">
                    <div className="container">
                        <div className="tab-content tab-space">
                            <div className="tab-pane active" id="html">
                                <div className="row">
                                    <div className="col-lg-4 mb-lg-0 mb-4">
                                        <div className="card">
                                            <div className="card-header text-center pt-4 pb-3">
                                                <span className="text-uppercase font-weight-bold text-dark"><h1>HTML</h1></span>
                                            </div>
                                            <div className="card-body text-lg-start text-center pt-0">
                                                <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                                    <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                                                        <i className="fas fa-check opacity-10"></i>
                                                    </div>
                                                <div>
                                                <span className="ps-3">Learn HTML</span>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                            <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                                                <i className="fas fa-check opacity-10"></i>
                                            </div>
                                        <div>
                                            <span className="ps-3">HTML Tags</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                        <div className="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                                            <i className="fas fa-minus"></i>
                                        </div>
                                        <div>
                                            <span className="ps-3">HTML Elements</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                        <div className="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                                            <i className="fas fa-minus"></i>
                                        </div>
                                        <div>
                                            <span className="ps-3">HTML Attributes</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                        <div className="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                                            <i className="fas fa-minus"></i>
                                        </div>
                                        <div>
                                            <span className="ps-3"> HTML Medias</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                        <div className="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                                            <i className="fas fa-minus"></i>
                                        </div>
                                        <div>
                                            <span className="ps-3">HTML Forms </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-lg-0 mb-4">
                            <div className="card">
                                <div className="card-header text-center pt-4 pb-3">
                                    <span className="text-uppercase font-weight-bold text-dark"><h1>CSS</h1></span>
                                </div>
                                <div className="card-body text-lg-start text-center pt-0">
                                    <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                        <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                                            <i className="fas fa-check opacity-10"></i>
                                        </div>
                                    <div>
                                        <span className="ps-3">Learn CSS</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                    <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                                        <i className="fas fa-check opacity-10"></i>
                                    </div>
                                    <div>
                                        <span className="ps-3">CSS Styles</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                    <div className="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                                        <i className="fas fa-minus"></i>
                                    </div>
                                    <div>
                                        <span className="ps-3">CSS Advanced</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                    <div className="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                                        <i className="fas fa-minus"></i>
                                    </div>
                                    <div>
                                        <span className="ps-3">CSS Responsive</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                    <div className="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                                    <i className="fas fa-minus"></i>
                                    </div>
                                    <div>
                                    <span className="ps-3"> CSS Grid</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                    <div className="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                                    <i className="fas fa-minus"></i>
                                    </div>
                                    <div>
                                    <span className="ps-3">CSS Examples </span>
                                    </div>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-lg-0 mb-4">
                            <div className="card">
                                <div className="card-header text-center pt-4 pb-3">
                                <span className="text-uppercase font-weight-bold text-dark"><h1>JAVASCRIPT</h1></span>
                                </div>
                                <div className="card-body text-lg-start text-center pt-0">
                                <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                    <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                                    <i className="fas fa-check opacity-10"></i>
                                    </div>
                                    <div>
                                    <span className="ps-3">Learn JAVASCRIPT</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                    <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                                    <i className="fas fa-check opacity-10"></i>
                                    </div>
                                    <div>
                                    <span className="ps-3">JAVASCRIPT Objects</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                    <div className="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                                    <i className="fas fa-minus"></i>
                                    </div>
                                    <div>
                                    <span className="ps-3">JAVASCRIPT Functions</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                    <div className="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                                    <i className="fas fa-minus"></i>
                                    </div>
                                    <div>
                                    <span className="ps-3">JAVASCRIPT Classes</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                    <div className="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                                    <i className="fas fa-minus"></i>
                                    </div>
                                    <div>
                                    <span className="ps-3"> JAVASCRIPT AJAX</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-lg-start justify-content-center p-2">
                                    <div className="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                                    <i className="fas fa-minus"></i>
                                    </div>
                                    <div>
                                    <span className="ps-3">JQuey </span>
                                    </div>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>                

    </>
    )
}

export default Home