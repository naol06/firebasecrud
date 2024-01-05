import React, { useState } from 'react'
import Nav from './Nav'
import {db,storage} from './firebase_config'
import { collection, addDoc } from "firebase/firestore";
import {ref,uploadBytesResumable,getDownloadURL} from "firebase/storage"
import { useNavigate } from 'react-router-dom';
import {v4} from 'uuid';
function Create() {
    const [data, setdata] = useState({
        name:"",
        email:"",
        phone:"",
        description:"",
       
    });
    const [progressbar, setprogressbar] = useState(null);
  
    const navigate=useNavigate()
    const dataCollection=collection(db,"users");
    const imageStorage=ref(storage,`images${v4()}`);
    const handledata=(e)=>{
        e.preventDefault()
      const uploadTask=  uploadBytesResumable(imageStorage,data.image)
      uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setprogressbar(progress)
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          addDoc(dataCollection,{
            name:data.name,
            email:data.email,
            phone:data.phone,
            description:data.description,
            images:downloadURL
        }).then(res=>{
            navigate('/')
            alert("User is added succesfully!!!")
            
        }).catch(err=>console.log(err))
         

          
        })
        
         
        
      }
    );

   
    }
   
  return (
    <div>
    <div> <Nav/></div>
   <div className='m-0 d-flex justify-content-center align-items-center vh-100 '>
   <div className=' rounded w-50 align-items-cnter bg-secondary p-5  '>
   <h2>create user</h2>
   

<form onSubmit={handledata}>
<div className="form-group mb-2">
  <input type="text" className="form-control" onChange={e=>setdata({...data, name:e.target.value})} placeholder="Enter Name" required/>
</div>
<div className="form-group mb-2">
  <input type="email" className="form-control" onChange={e=>setdata({...data, email:e.target.value})} placeholder="Enter Email" required/>
</div>
<div className="form-group mb-2">
  <input type="number" className="form-control" onChange={e=>setdata({...data, phone:e.target.value})} placeholder="Enter Phone" required/>
</div>
<div className="form-group mb-2">
  <input type="text" className="form-control" onChange={e=>setdata({...data, description:e.target.value})} placeholder="Enter User Description" required/>
</div>
<div className="form-group mb-3">
  <input type="file" className="form-control" onChange={e=>setdata({...data, image:e.target.files[0]})} required/>
</div>
<button type='submit' className="btn w-100 btn-primary">Create</button>
</form>
   </div>
   </div>
    </div>
  )
}

export default Create