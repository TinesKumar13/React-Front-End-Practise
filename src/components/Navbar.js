import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar__Container">
            <nav className="navbar__Main">
            <h1>TheSpace</h1>

            <ul>
                <li className="nav__Button">Our Works</li>
                <li className="nav__Button">Services</li>
                <li className="nav__Button">Contact Us</li>
            </ul>
            </nav>
        </div>
    )
}

export default Navbar
