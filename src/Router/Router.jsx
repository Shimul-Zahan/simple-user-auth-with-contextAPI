import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import Login from "../Components/Login-Page/Login";
import Register from "../Components/Register-Page/Register";
import Dashboard from "../Components/Dashboard/Dashboard";
import PrivateRoute from "../Private/PrivateRoute";
import UserDetails from "../Components/UserDetails/UserDetails";

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
                element: <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>,
            },
            {
                path: '/details',
                element: <UserDetails />
            },
        ]
    }
])


export default MyRouter