import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import Login from "../Components/Login-Page/Login";

const MyRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <h1>Register</h1>
            },
            {
                path: '/dashboard',
                element: <h1>Dashboard</h1>
            },
        ]
    }
])


export default MyRouter