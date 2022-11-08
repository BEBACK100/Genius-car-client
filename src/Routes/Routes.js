import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";

import Home from "../Pages/Home/Home";

import Login from "../Pages/Login/Login";
import Order from "../Pages/Order/Order";
import Signup from "../Pages/Signup/Signup";


const { createBrowserRouter } = require("react-router-dom")
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/order',
                element: <Order></Order>
            }
        ]

    }
]);
export default router;