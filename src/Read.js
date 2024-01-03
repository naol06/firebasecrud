import React from 'react'
import Nav from './Nav'

function Read() {
  return (
    <div className='container-fluid p-0 m-0 '>
    <Nav/>
     <div className='bg-primary d-flex vh-100 justify-content-center align-items-center '>
     <div className='rounded  bg-white pt-2 align-items-center w-75 row object-fit-cover '>
   <div className='col-6 align-items-center border align-items-center  d-flex justify-content-center'>
   <img className='read-img m-2' src={"https://th.bing.com/th/id/OIP.iZ0ppT_wpBOMf0dH97t_ZAHaEo?w=299&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7"}alt=''/>
   </div>
   <div className='col-6 align-items-start px-3 d-flex flex-column'>
   <h4 className='m-2'><b>Name</b>:Naol</h4>
   <h4 className='m-2'><b>Email</b>:naolb06@gmail.com</h4>
   <h4 className='m-2'><b>Phone</b>:0979235206</h4> </div>
   </div> 
    </div>
   </div>
    
  )
}

export default Read