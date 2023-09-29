import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-[700px] w-full flex justify-center items-center space-y-8 flex-col'>
      <h1 className="text-7xl font-bold">Welcome log User Log Auth</h1>
      <div className='text-xl font-bold flex justify-center items-center gap-10'>
        <Link to='login' className='btn btn-outline btn-secondary'>Login</Link>
        <Link to='/register' className='btn btn-outline btn-secondary'>Registration</Link>
      </div>
    </div>
  )
}

export default Home