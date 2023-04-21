import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="navbar">
            <h1 className="fuente-logo">Taurina</h1>
            <div className="nav-link-container">
                <NavLink to="/" className={`nav-link${isActive('/') ? ' active' : ''}`} end replace>Inicio</NavLink>
                <NavLink to="/cursos" className={`nav-link${isActive('/cursos') ? ' active' : ''}`} replace>Cursos</NavLink>
                <NavLink to="/galeria" className={`nav-link${isActive('/galeria') ? ' active' : ''}`} replace>Galería</NavLink>
                <NavLink to="/agenda" className={`nav-link${isActive('/agenda') ? ' active' : ''}`} replace>Agenda</NavLink>
                <NavLink to="/contacto" className={`nav-link${isActive('/contacto') ? ' active' : ''}`} replace>Contacto</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;