import React from 'react'
import logo from "../../assets/logo.png"
const Footer = () => {
  return (
    <div className='custom-footer container p-10'>
        <div className='row'>
        <div className='col-sm-3'>
            <img src={logo} alt='logo-of-gdsc'></img>
            <p className='mt-1 text-muted'>Addis Abeba Science and technology <br/>university</p>
            <p className='text-muted mt-3'>Copyright<sup>&#169;</sup>2023 all rights reserved</p>
        </div>
        <div className='col-sm-3 text-start'>
            <ul>
                <h5 className='text-muted'>Connect</h5>
                <li className='small  p-1'><a>Twitter</a></li>
                <li  className='small p-1'><a>Linkdin</a></li>
                <li  className='small p-1'><a>Youtube</a></li>
                <li  className='small p-1'><a>Events</a></li>
            </ul>
        </div>
        <div className='col-sm-3 text-start'>
        <ul>
                <h5 className='text-muted'>Programs</h5>
                <li  className='small p-1'><a>Wommen Tech makers</a></li>
                <li  className='small p-1'><a>Google Developer Groups</a></li>
                <li  className='small p-1'><a>Googls Devloper Experts</a></li>
        </ul>
        </div>
        <div className='col-sm-3 text-start'>
        <ul>
                <h5 className='text-muted'>Developer consols</h5>
                <li  className='small p-1'><a>Firebase Console</a></li>
                <li  className='small p-1'><a>Google Cloud Platform</a></li>
                <li  className='small p-1'><a>Action on Google</a></li>
        </ul>
        </div>
        </div> 
    </div>
  )
}

export default Footer