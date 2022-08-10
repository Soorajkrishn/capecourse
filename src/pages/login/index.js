import React, { useState } from "react"
import {Link} from 'react-router-dom'


function Login(){

  let [userLog,setUserlog]=useState({
    request:'stefhi_login',
      email:'',
      password:''
  }) 

  const handleInput=(e,key)=>{
    setUserlog({...userLog,[key]:e.target.value})
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
                            <h5 className="text-dark text-center mt-2 mb-3">Sign in</h5>
                            
                            <form className="text-start">
                              <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Email" aria-label="Email" onChange={(e)=>handleInput(e,'email')}/>
                              </div>
                              <div className="mb-3">
                              <input type="password" className="form-control" placeholder="Password" aria-label="Password" onChange={(e)=>handleInput(e,'password')}/>
                              </div>
                              
                              <div className="text-center">
                                <button type="button" className="btn btn-primary w-100 my-4 mb-2" >Sign in</button>
                              </div>
                              <div className="mb-2 position-relative text-center">
                                <p className="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
                                  or
                                </p>
                              </div>
                              <div className="text-center">
                                <Link to='/register'><button type="button" className="btn bg-gradient-dark w-100 mt-2 mb-4">Sign up</button></Link>
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


export default Login