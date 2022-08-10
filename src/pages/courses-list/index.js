import {Link} from 'react-router-dom'
import Footer from "../../components/Footer"
import Topbar from "../../components/top bar"
import Payment from '../../components/payment'


function CourseList(){


    return(
       
            <>
        <div className="main-content position-relative max-height-vh-100 h-100">
        <Topbar/>
        
      <div className="container-fluid py-4">
      <section className="py-3">
        <div className="row">
          <div className="col-md-8 me-auto text-left">
            <h5><b>Some of Our Courses</b></h5>
          </div>
        </div>
        <h1>Free Courses</h1>
        <div className="row mt-lg-4 mt-2">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="d-flex">
                  <div className="avatar avatar-xl bg-gradient-dark border-radius-md p-2">
                  <i className="fa-brands fa-python"></i>
                  </div>
                  <div className="ms-3 my-auto">
                    <h6>Python Programming Course</h6>
                  </div>
                  
                </div>
                <p className="text-sm mt-3"> Python is among the latest and most popular object-oriented, multifunctional programming languages. It is easy to learn, and you can use several operating systems, such as UNIX, to interpret it. While using Python, it is easy to debug the code as there are no developing steps, and the cycle to test debugging is fast as well.  </p>
                <hr className="horizontal dark"/>
                <div className="row">
                  <div className="col-6">
                    
                    <p className="text-secondary text-sm font-weight-bold mb-0">Free</p>
                  </div>
                  <div className="col-6">
                    <Link to='/courses'><button className="btn btn-primary">Add Course</button></Link>
                    
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="d-flex">
                  <div className="avatar avatar-xl bg-gradient-dark border-radius-md p-2">
                  <i className="fa-brands fa-java"></i>
                  </div>
                  <div className="ms-3 my-auto">
                    <h6> Java Programming Course</h6>
                  </div>
                  
                </div>
                <p className="text-sm mt-3"> Java is among the most secure and powerful languages in the world. There are millions of apps across cell phones, smartphones, etc., that run on this platform. If you had opted for computer applications in your school, you might have studied the basics of this language at a young age.  </p>
                <hr className="horizontal dark"/>
                <div className="row">
                  <div className="col-6">

                    <p className="text-secondary text-sm font-weight-bold mb-0">Free</p>
                  </div>
                  <div className="col-6">
                    <Link to='/courses'><button className="btn btn-primary">Add Course</button></Link>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="d-flex">
                  <div className="avatar avatar-xl bg-gradient-dark border-radius-md p-2">
                  <i className="fa-brands fa-square-js"></i>
                  </div>
                  <div className="ms-3 my-auto">
                    <h6>JavaScript Course</h6>
                  </div>
                  
                </div>
                <p className="text-sm mt-3"> If you want to work in the field of web development, irrespective of the specialization, you need to begin by learning JavaScript and gaining working experience in it. In this domain, recruiters expect you to know the working of JavaScript and its core concepts. To become a Full Stack Developer or get any other job role in web development. </p>
                <hr className="horizontal dark"/>
                <div className="row">
                  <div className="col-6">

                    <p className="text-secondary text-sm font-weight-bold mb-0">Free</p>
                  </div>
                  <div className="col-6">
                    <Link to='/courses'><button className="btn btn-primary">Add Course</button></Link>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <h1>Paid Courses</h1>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="d-flex">
                  <div className="avatar avatar-xl bg-gradient-dark border-radius-md p-2">
                  <i className="fa-brands fa-angular"></i>
                  </div>
                  <div className="ms-3 my-auto">
                    <h6>AngularJS Course</h6>
                  </div>
                </div>
                <p className="text-sm mt-3"> Angular 6 is the latest version of AngularJS. Learning Angular 6 will help you enhance your skills and develop interactive web applications. This popular language will make you gain knowledge of the components of AngularJS, directives, access to HTTP, routings, and more. </p>
                <hr className="horizontal dark"/>
                <div className="row">
                  <div className="col-6">
                    <h6 className="text-sm mb-0">1500</h6>
                    <p className="text-secondary text-sm font-weight-bold mb-0">Amount</p>
                  </div>
                  <div className="col-6">
                    <Payment/>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="d-flex">
                  <div className="avatar avatar-xl bg-gradient-dark border-radius-md p-2">
                  <i className="fa-brands fa-react"></i>
                  </div>
                  <div className="ms-3 my-auto">
                    <h6>ReactJS Courses</h6>
                  </div>
                </div>
                <p className="text-sm mt-3"> If you're looking to get started with this powerful UI library, edX.org offers courses in partnership with Microsoft so you can get the foundation and start building. Introduction to ReactJS gives you the basics, teaching you to create React elements, build react applications using React components. </p>
                <hr className="horizontal dark"/>
                <div className="row">
                  <div className="col-6">
                    <h6 className="text-sm mb-0">2000</h6>
                    <p className="text-secondary text-sm font-weight-bold mb-0">Amount</p>
                  </div>
                  <div className="col-6">
                    <Payment/>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="d-flex">
                  <div className="avatar avatar-xl bg-gradient-dark border-radius-md p-2">
                  <i className="fa-brands fa-node-js"></i>
                  </div>
                  <div className="ms-3 my-auto">
                    <h6>Node.js Course</h6>
                  </div>                  
                </div>
                <p className="text-sm mt-3"> If you are interested in building real-world applications by using a network, Node.js is the perfect way to go about it. By gaining expert knowledge in software such as Mocha, Express, and MongoDB, you will have the ability to create, test, and deploy several real-time production applications.  </p>
                <hr className="horizontal dark"/>
                <div className="row">
                  <div className="col-6">
                    <h6 className="text-sm mb-0">2300</h6>
                    <p className="text-secondary text-sm font-weight-bold mb-0">Amount</p>
                  </div>
                  <div className="col-6">
                    <Payment/>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>          
        </div>
      </section>
      </div>
      <Footer/>
    </div>
    
    </>
               
    )
}

export default CourseList