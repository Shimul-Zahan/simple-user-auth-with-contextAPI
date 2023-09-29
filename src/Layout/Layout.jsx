import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout