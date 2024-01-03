import React from 'react'
import Nav from './Nav'

function Create() {
  return (
    <div className='App'>
    <Nav/>
    <div className='d-flex justify-content-center align-items-center vh-100 bg-primary'>
    <div className='rounded bg-white w-50 p-2 align-items-center'>
    <h2>create User</h2>
    <form>
<div class="form-group m-2 ">
  <input type="email" class="form-control border-black" name="" id=""  placeholder="Enter Name"/>
</div>
<div class="form-group m-2">
  <input type="email" class="form-control border-black" name="" id=""  placeholder="Enter Email"/>
</div>
<div class="form-group m-2">
  <input type="password" class="form-control border-black" name="" id="" placeholder="Enter Password"/>
</div>
<div class="form-group m-2">
<input type='file' className="form-control border-black" />
</div>
<div class="form-group m-2">
<button type="button" class="btn  w-100 btn-success">Submit</button>
</div>
</form>
    </div>
    </div>
    </div>
  )
}

export default Create