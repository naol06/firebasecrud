import React, { useState } from 'react'
import Nav from './Nav'
import {db} from './firebase_config'
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
function Create() {
    const [data, setdata] = useState({
        name:"",
        email:"",
        phone:"",
        description:"",
        image:""
    });
    const navigate=useNavigate()
    const dataCollection=collection(db,"users");
    const handledata=(e)=>{
        e.preventDefault()
addDoc(dataCollection,{
    name:data.name,
    email:data.email,
    phone:data.phone,
    description:data.description
}).then(res=>{
    navigate('/')
    alert("User is added succesfully!!!")
    
}).catch(err=>console.log(err))
    }
  return (
    <div>
    <div> <Nav/></div>
   <div className='m-0 d-flex justify-content-center align-items-center vh-100 '>
   <div className=' rounded w-50 align-items-cnter bg-secondary p-5  '>
   <h2>create user</h2>
<form onSubmit={handledata}>
<div className="form-group mb-2">
  <input type="text" className="form-control" onChange={e=>setdata({...data, name:e.target.value})} placeholder="Enter Name"/>
</div>
<div className="form-group mb-2">
  <input type="email" className="form-control" onChange={e=>setdata({...data, email:e.target.value})} placeholder="Enter Email"/>
</div>
<div className="form-group mb-2">
  <input type="number" className="form-control" onChange={e=>setdata({...data, phone:e.target.value})} placeholder="Enter Phone"/>
</div>
<div className="form-group mb-2">
  <input type="text" className="form-control" onChange={e=>setdata({...data, description:e.target.value})} placeholder="Enter User Description"/>
</div>
<div className="form-group mb-3">
  <input type="file" className="form-control" onChange={e=>setdata({...data, image:e.target.files[0]})} />
</div>
<button type='submit' className="btn w-100 btn-primary">Create</button>
</form>
   </div>
   </div>
    </div>
  )
}

export default Create