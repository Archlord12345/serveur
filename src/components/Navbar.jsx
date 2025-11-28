import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top mc-navbar">
            <div className="container">
                <Link className="navbar-brand glitch" to="/" data-text="ANARCHIE">ANARCHIE</Link>
                <button className="navbar-toggler mc-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={`nav-link mc-link ${isActive('/')}`} to="/">ACCUEIL</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link mc-link ${isActive('/regles')}`} to="/regles">RÈGLES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link mc-link ${isActive('/rejoindre')}`} to="/rejoindre">REJOINDRE</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
