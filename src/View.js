import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import {db} from "./firebase_config"
import{doc,getDoc ,deleteDoc} from 'firebase/firestore'
import { Link, useNavigate, useParams } from 'react-router-dom';
function View() {
  const [data, setdata] = useState([]);
  const {id}=useParams();
  const navigate=useNavigate()
  const userdata=doc(db,"users",id) 
  useEffect(() => {
   getDoc(userdata)
   .then(res=>{
    setdata(res.data())
   })
   .catch(err=>{
    console.log(err);
   })
  }, []);
  const handleDelete=()=>{
    deleteDoc(userdata)
    .then(res=>{
navigate('/')
    alert("User is deleted successfully")
    })
    .catch(err=>console.log(err))
  }
 
  return (
    <div>
    <div className='mb-5 mb-md-0'>
    <Nav/>
    </div>
    <div className="container  d-md-flex justify-content-center align-items-center  vh-100 ">
  <div className="row border   justify-content-left align-items-center">
    <div className="col-md-5 ">
      <img src={`https://www.billboardmusicawards.com/wp-content/uploads/2019/04/XXXTENTACION.jpg`} className="img-fluid" alt="User image"/>
    </div>
    <div className="col-md-5 ">
      <h3>{data.name}</h3>
      <p><b>{data.email}</b></p>
      <p>{data.description} </p>
      <p></p>
    </div>
    <div className='d-flex justify-content-center justify-content-md-end'>
 <Link to={'/'} className="btn btn-primary m-2">Back</Link>
 <button type="button" onClick={handleDelete} className="btn btn-danger m-2">Delete</button>
  </div>
  </div>
  
</div>
    </div>
  )
}

export default View