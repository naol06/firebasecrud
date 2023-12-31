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
  <div className="row border m-0 p-5  justify-content-left align-items-center">
    <div className="col-md-5 ">
      <img src={data.images ? `${data.images}` : "https://th.bing.com/th/id/OIP.QMjbYP6DkKUoUvkGTt6XSAHaE8?rs=1&pid=ImgDetMain"} className="img-fluid  ds_image rounded object-fit-cover" alt="Userimage"/>
    </div>
    <div className="col-md-5 ">
      <h3>{data.name? data.name:"Tentacion"}</h3>
      <p><b>{data.email? data.email:"tentacion@gmail.com"}</b></p>
      <p>{data.description? data.description:"This code will check if the data.image property is truthy, and if so, it will use it as the source. Otherwise, it will use the image from the internet. You can also use a relative path instead of a URL for the second image"} </p>
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