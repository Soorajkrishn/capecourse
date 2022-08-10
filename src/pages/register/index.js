import { useState } from 'react'
import {Link} from 'react-router-dom'

function Register(){
 
  let [newuser,setNewuser]=useState({
    name:'',
    email:'',
    password:'',
  }) 

  const handleInput=(e,key)=>{
  setNewuser({...newuser,[key]:e.target.value})
  }
  
  const getRegister=()=>{
    fetch(`https://karka.academy/api/action.php?request=stefhi_login&email=${newuser.email}&password=${newuser.password}&name=${newuser.name}`)
    .then((res)=>res.json())
    // .then((response))
  }


    return(
        <>
           <main className="main-content main-content-bg mt-0">
            <div className="page-header min-vh-100">
              <span className="mask bg-gradient-dark opacity-6"></span>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-7">
                    <div className="card z-index-0">
                      <div className="card-header text-center pt-4">
                        <h5>Register with</h5>
                      </div>
                      <div className="card-body">
                        <form >
                          <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Name" aria-label="Name" onChange={(e)=>handleInput(e,'name')}/>
                          </div>
                          <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Email" aria-label="Email" onChange={(e)=>handleInput(e,'email')}/>
                          </div>
                          <div className="mb-3">
                            <input type="password" className="form-control" placeholder="Password" aria-label="Password" onChange={(e)=>handleInput(e,'password')}/>
                          </div>
                          <div className="text-center">
                            <button type="button" className="btn bg-gradient-dark w-100 my-4 mb-2" onClick={getRegister}>Sign up</button>
                          </div>
                          <p className="text-sm mt-3 mb-0">Already have an account? <Link to="/login">Sign in</Link> </p>
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

export default Register