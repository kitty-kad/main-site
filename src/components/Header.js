import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">KITTY KAD</div>
                <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`nav ${menuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                        <li><a href="#community-efforts" onClick={() => setMenuOpen(false)}>Community Efforts</a></li>
                        <li><a href="#socials" onClick={() => setMenuOpen(false)}>Socials</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;