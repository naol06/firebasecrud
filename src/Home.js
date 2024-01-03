import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { collection,getDocs } from 'firebase/firestore'
import{db}from "./firebase_config"

function Home() {
    const [users, setusers] = useState([]);
    
    useEffect(() => {
      const usersCollectionRef=collection(db,"users");
  getDocs(usersCollectionRef)
  .then(res=>{
    setusers(res.docs.map((doc)=>({...doc.data(),id:doc.id})))
  })
  .catch(err=>console.log(err))
 
    }, []);
console.log(users);
  return (
    <div className='container-fluid '>
    <div className=''>
    <Nav/>
    </div>
    <div className="container-fluid">
  <div className="row d-flex justify-content-center">
 
 {users.map((user)=>{
return <div className="col-lg-3 col-sm-4 border mt-md-5 m-3 m-md-4 p-4">
<img src={`https://www.billboardmusicawards.com/wp-content/uploads/2019/04/XXXTENTACION.jpg`}
 alt="..." className="img-fluid rounded-circle" />
  <h3>{user.name}</h3>
  <p>{user.email}</p>
  <div className="d-flex justify-content-center">
  <Link to={`/view/${user.id}`} className="btn btn-success m-2"><i className="bi bi-eye">View</i></Link>
  <Link to={`/update/${user.id}`} className="btn btn-info m-2">Update</Link>
</div>
</div>
 })} 



  </div>
</div>
    </div>
  )
}

export default Home