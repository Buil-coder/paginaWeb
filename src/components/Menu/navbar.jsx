// src/components/Navbar.js
import React from 'react';
import '../../style/Menu.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="#home">Home</a></li>
                <li className="navbar-item"><a href="#services">Servicios</a></li>
                <li className="navbar-item"><a href="#about">Nosotros</a></li>
                <li className="navbar-item"><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;