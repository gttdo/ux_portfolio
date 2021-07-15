import React from 'react'
import logo from '../../../pictures/logo_placeholder.jpg';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <a href="#" className="navbar_logo_link"><img src={logo} alt="logo" /></a>
            </div>
            <div className="navbar_menu">
                <ul className="navbar_menu_list">
                    <li className="navbar_menu_list_link">About</li>
                    <li className="navbar_menu_list_link">Works</li>
                    <li className="navbar_menu_list_link">Contact</li>
                </ul>
            </div>
            <div className="navbar_socialMedia">
                <ul className="navbar_socialMedia_list">
                    <li className="navbar_socialMedia_list_link"><i class="fab fa-linkedin-in"></i></li>
                    <li className="navbar_socialMedia_list_link"><i class="fab fa-twitter"></i></li>
                    <li className="navbar_socialMedia_list_link"><i class="fab fa-instagram"></i></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
