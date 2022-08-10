import React, { useContext, useState } from "react"


function AdminLogin(){



  

  let [adminLog,setadminlog]=useState({
    request:'capecourse_admin_login',
    email:null,
    password:null
  })
  
  const handleInput=(e,key)=>{
    setadminlog({...adminLog,[key]:e.target.value})
    }

  

    return (
        <>
            <main className="main-content main-content-bg mt-0">
              <div className="page-header min-vh-100">
                <span className="mask bg-gradient-dark opacity-6"></span>
                
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-7">
                        <div className="card border-0 mb-0">
                          <div className="card-header bg-transparent">
                            <h5 className="text-dark text-center mt-2 mb-3">Adminstration Sign in</h5>
                            
                            <form className="text-start">
                              <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Email" aria-label="Email" onChange={(e)=>handleInput(e,'email')}/>
                              </div>
                              <div className="mb-3">
                              <input type="password" className="form-control" placeholder="Password" aria-label="Password" onChange={(e)=>handleInput(e,'password')}/>
                              </div>
                              <b id="msg"></b>
                              <div className="text-center">
                                <button type="button" className="btn btn-primary w-100 my-4 mb-2" onClick={getAdminlog}>Sign in</button>
                              </div>
                              
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </main>
        </>
      )
}


export default AdminLogin