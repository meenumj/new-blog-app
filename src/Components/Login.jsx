import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const [input,setInput] = new useState(
        {   
                "Email":"",
                "Password":""
               }
)

const inputHandler = (event)=>{
    setInput({...input,[event.target.name]:event.target.value})

}
const readValues = ()=>{
    console.log(input)
    axios.post("http://localhost:3001/api/blog/signin",input).then((response)=>{
        console.log(response.data)
        if (response.data.status=="success") {
            console.log(response.data.userData._id)
            sessionStorage.setItem("userID",response.data.userData._id)//session set value.userID session variable
            navigate("/addpost")
            setInput(  {   
                    
                    "Email":"",
                    "Password":""
                   }
                   )
                  
        } else if(response.data.status=="Invalid User") {
            alert("Invalid User Name")
            setInput(  {   
                    
                "Email":"",
                "Password":""
               }
               )
        }
        else{
            alert("Incorrect Password")
            setInput(  {   
                    
                "Email":"",
                "Password":""
               }
            
               )
        }
    })
}
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
                        <input type="text" className="form-control" name="Email" value={input.Email} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control" name="Password" value={input.Password} onChange={inputHandler}/>
                    </div>
                    
                    <div className="col col-12 col-sm-2 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <center> <button className="btn btn-success" onClick={readValues}>Login</button></center>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <center><Link to="/signup" className="nav-link">New Users Click Here</Link></center> 
                    </div>
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Login
