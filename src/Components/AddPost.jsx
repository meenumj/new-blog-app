import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddPost = () => {
    const [input,setInput] = new useState(
        
        {       "UserID":sessionStorage.getItem("userID"),
                "Post": ""
               }
)

const inputHandler = (event)=>{
    setInput({...input,[event.target.name]:event.target.value})

}
const readValues = ()=>{
    console.log(input)
    axios.post("http://localhost:3001/api/post/add",input).then((response)=>{
        console.log(response.data)
        if (response.data.status=="success") {
            alert("Post Added Successfully")
            setInput(  {   
                        "Post": ""
                   }
                   )
                   
        } else {
            alert("Something went wrong")
        }
    })
}
  return (
    <div>
        <NavBar />
       <div className="container bg-light">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <br /><br /> <h1><center>Add Post</center></h1>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Write your Post</label>
                        <textarea name="Post"  cols="30" rows="5" className="form-control" value={input.Post} onChange={inputHandler} ></textarea>
                    </div>
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValues}>Add Post</button>
                    </div>
        
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost
