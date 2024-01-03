import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container-fluid p-0 m-0 overflow-auto'>
    <Nav/>
     <div className='bg-primary d-flex vh-100 justify-content-center align-items-center '>
     <div className='rounded  bg-white pt-2 align-items-center
     w-75 '>
     <h3>Users List</h3>
<table className="table">
    <thead> 
        <tr >
            <th className='text-primary fs-4'>Name</th>
            <th className='text-primary fs-4'>Image</th>
            <th className='text-primary fs-4'>Email</th>
            <th className='text-primary fs-4'>Phone</th>
            <th className='text-primary fs-4'>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            
            <td><b>Naol</b></td>
            <td><img className='img_size' src={"https://th.bing.com/th/id/OIP.iZ0ppT_wpBOMf0dH97t_ZAHaEo?w=299&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7"} alt=''/></td>
            <td><b>naolb06@gmail.com</b></td>
            <td><b>0979235206</b></td>
            <td>
            <Link to={'/read'} className="btn btn-primary">Read</Link>
            <button type="button" className="btn  mx-2 btn-info">Update</button>
            <button type="button" className="btn btn-danger">Delete</button>
            </td>
            
        </tr>
        <tr>
            
            <td><b>Naol</b></td>
            <td><img className='img_size' src={"https://th.bing.com/th/id/OIP.iZ0ppT_wpBOMf0dH97t_ZAHaEo?w=299&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7"} alt=''/></td>
            <td><b>naolb06@gmail.com</b></td>
            <td><b>0979235206</b></td>
            <td>
            <Link to={'/read'} className="btn btn-primary">Read</Link>
            <button type="button" className="btn  mx-2 btn-info">Update</button>
            <button type="button" className="btn btn-danger">Delete</button>
            </td>
            
        </tr>
        <tr>
            
        <td><b>Naol</b></td>
        <td><img className='img_size' src={"https://th.bing.com/th/id/OIP.iZ0ppT_wpBOMf0dH97t_ZAHaEo?w=299&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7"} alt=''/></td>
        <td><b>naolb06@gmail.com</b></td>
        <td><b>0979235206</b></td>
        <td>
        <Link to={'/read'} className="btn btn-primary">Read</Link>
        <button type="button" className="btn  mx-2 btn-info">Update</button>
        <button type="button" className="btn btn-danger">Delete</button>
        </td>
        
    </tr>
    </tbody>
</table>

     </div>
    </div>
    </div>
  )
}

export default Home