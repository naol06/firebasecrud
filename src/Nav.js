import React from 'react'
import { Link } from 'react-router-dom'

function Nav({naol}) {
  return (
    <nav className="navbar navbar-light bg-black ">
  <div className="container-fluid d-flex justify-content-space-between px-5">
  <Link className='text-decoration-none' to={'/'}><i className="bi bi-house-heart-fill text-white" style={{ fontSize: 30 }}>Home</i> </Link>
    <Link to={'/create'} className="btn  bg-white">Create +</Link>
  </div>
</nav>
  )
}

export default Nav