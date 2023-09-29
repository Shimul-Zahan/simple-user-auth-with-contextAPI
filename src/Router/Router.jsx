import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import Login from "../Components/Login-Page/Login";
import Register from "../Components/Register-Page/Register";
import Dashboard from "../Components/Dashboard/Dashboard";

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
                element: <Register />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
        ]
    }
])


export default MyRouter