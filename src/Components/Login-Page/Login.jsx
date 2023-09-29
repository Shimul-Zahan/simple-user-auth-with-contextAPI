import React, { useContext } from 'react'
import { MyContext } from '../../Context/AuthProvider';

const Login = () => {
  const name = useContext(MyContext);
  console.log(name)
  return (
    <div>Login : { name.name }</div>
  )
}

export default Login