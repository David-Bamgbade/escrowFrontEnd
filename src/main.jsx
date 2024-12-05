import React from 'react';
import HomePage from "./HomePage.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactDom from "react-dom/client";
import './styling/signUp.css'
import './styling/App.css'
import Signup from "./routes/Signup.jsx";
import Complain from "./routes/Complain.jsx";
import EscrowPayment from "./routes/EscrowPayment.jsx";
import SendSellerDetails from "./routes/SendSellerDetails.jsx";

const allRoutes = createBrowserRouter([
    {path: "/", element: <HomePage/>},
    {path: "/signup", element: <Signup/>},
    {path: "/complain",  element: <Complain/>},
    {path: "/payment",  element: <EscrowPayment/>},
    {path: "/homepage",  element: <HomePage/>},
    {path: "/sendSellerDetails", element: <SendSellerDetails/>}
]);

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router = {allRoutes}/>
    </React.StrictMode>
);
