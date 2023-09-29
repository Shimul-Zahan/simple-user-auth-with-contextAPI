import React, { useContext } from 'react'
import { MyContext } from '../../Context/AuthProvider'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className="navbar py-8">
      <div className="navbar-start">
        <div className="dropdown text-lg">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm text-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/register'>Registration</NavLink></li>
          </ul>
        </div>
        <a className=" text-3xl font-bold">Simple-User-Auth</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/dashboard'>DashBoard</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end gap-5 flex justify-end items-center text-lg">
        <div>
          <NavLink to='/login'>Login</NavLink>
        </div>
        <div>
          <NavLink to='/register'>Registration</NavLink>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content text-lg mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar