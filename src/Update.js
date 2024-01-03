import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { useNavigate, useParams } from 'react-router-dom'
import {db} from "./firebase_config"
import { doc,getDoc ,setDoc} from 'firebase/firestore'
function Update() {
  const {id}=useParams();
  const navigate=useNavigate()
  const userdata=doc(db,"users",id)
  const [data, setdata] = useState({
    name:"",
    phone:"",
    email:"",
    description:"",
  });



  useEffect(() => {
    

  getDoc(userdata)
  .then(res=>{
    setdata(res.data())
  })
  .catch(err=>console.log(err))
  }, []);
  const handleupdate=(e)=>{
e.preventDefault();
setDoc(userdata,{name:data.name,
email:data.email,
phone:data.phone,
description:data.description})
.then(res=>{
  navigate('/')
})
.then(alert("User's data is updated successfully"))
.catch(err=>console.log(err))
  }
  return (
    <div>
    <div> <Nav/></div>
   <div className='m-0 d-flex justify-content-center align-items-center vh-100 '>
   <div className=' rounded w-50 align-items-cnter bg-success p-5  '>
   <h2>Update user</h2>
<form onSubmit={handleupdate}>
<div className="form-group mb-2">
  <input type="text" className="form-control" value={data.name} onChange={e=>setdata({...data ,name:e.target.value})} placeholder="Enter Name"/>
</div>
<div className="form-group mb-2">
  <input type="email" className="form-control" value={data.email}  onChange={e=>setdata({...data ,email:e.target.value})} placeholder="Enter Email"/>
</div>
<div className="form-group mb-2">
  <input type="number" className="form-control" value={data.phone}  onChange={e=>setdata({...data ,phone:e.target.value})} placeholder="Enter Phone"/>
</div>
<div className="form-group mb-2">
  <input type="text" className="form-control" value={data.description}  onChange={e=>setdata({...data ,description:e.target.value})} placeholder="Enter User Description"/>
</div>
<div className="form-group mb-3">
  <input type="file" className="form-control" />
</div>
<button type="submit" className="btn w-100 btn-primary">Update</button>
</form>
   </div>
   </div>
    </div>
  )
}

export default Update