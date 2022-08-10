function SidebarCourse(){
  return(
    <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " >
    <div className="sidenav-header">
      <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/argon-dashboard-pro/pages/dashboards/default.html " target="_blank">
        <span className="ms-1 font-weight-bold">Tutorials</span>
      </a>
    </div>
    <hr className="horizontal dark mt-0"/>
    
    
    <div className="collapse navbar-collapse  w-auto h-auto" id="sidenav-collapse-main">
      <ul className="navbar-nav">
        <li className="nav-item">
          <h3>HTML</h3>
          <a href="#dashboardsExamples" className="nav-link " aria-controls="dashboardsExamples" role="button" aria-expanded="false">
            <div className="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center">
              
            </div>
            <span className="nav-link-text ms-1">HTML Basics</span>
          </a>
            <ul className="nav ms-4">
              <li className="nav-item ">
                <a className="nav-link " href="#">

                  <span className="sidenav-normal"> HTML tags </span>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="#">

                  <span className="sidenav-normal">HTML Elements </span>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="#">

                  <span className="sidenav-normal"> HTML Attributes </span>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="#">

                  <span className="sidenav-normal"> HTML Medias </span>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link "  aria-expanded="false" href="#vrExamples">

                  <span className="sidenav-normal"> HTML Forms </span>
                </a>
              </li>
            </ul>
        </li>
      </ul>
    </div>
    
  </aside>
  )
}

export default SidebarCourse