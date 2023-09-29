import React, { useContext } from 'react'
import { MyContext } from '../Context/AuthProvider'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(MyContext);
    console.log(user);
    if (isLoading) {
        <span className="loading loading-spinner loading-lg h-screen flex justify-center items-center"></span>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to='/login'></Navigate>
    )
}

export default PrivateRoute