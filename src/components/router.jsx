import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Contact from './Contact/Contact';
import Service from './Service/Service';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Home/>
        // element : <Navbar/>
    },
    {
        path : '/About',
        element : <About/>
    },
    {
        path : '/nav',
        element : <Contact/>
    },
    {
        path : '/nav',
        element : <Service/>
    },
    // {
    //     path : '/nav',
    //     element : <Navbar/>
    // },
]);

export default router
