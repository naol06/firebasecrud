import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    
    <div className='bg-black d-flex   justify-content-end align-items-center p-3 '>
    <ul className='d-flex bg-black align-items-center justify-content-space-between list-unstyled '>
    <li className='mx-3 fs-3 bg-black ' ><Link className='bg-black text-decoration-none text-white' to={`/`}> Home</Link></li>
    <li className='mx-3 fs-3 bg-black ' ><Link className='bg-black text-decoration-none text-white' to={`/create`}> Create +</Link></li>
    <li className='mx-3 fs-3 bg-black'><Link className='bg-black text-decoration-none text-white'  to={`/about`}>About Us</Link></li>
    <li className='mx-3 fs-3 bg-black'><Link className='bg-black text-decoration-none text-white'  to={`/contact`}>Contact Us</Link></li>
    </ul>
    
    </div>
   
  )
}

export default Nav