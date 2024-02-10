import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      
      <div className="container bg-light">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <br /><br /> <h1><center>Login Here</center></h1>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email ID</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    
                    <div className="col col-12 col-sm-2 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <center> <button className="btn btn-success" >Login</button></center>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <center><Link to="/signup" className="nav-link">New User?</Link></center> 
                    </div>
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Login
