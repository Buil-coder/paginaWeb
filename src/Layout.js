// src/Layout.js
import React from 'react';
import Home from './views/home';
import Navbar from './components/Menu/navbar';

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
        </div>
    );
};

export default Layout;
