import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../styling/NavBar.css';

const NavBar = () => {
    return (
        // <nav>
        //     <ul>
        //         <li>
        //             <Link to="/">Home</Link>
        //         </li>
        //         <li>
        //             <Link to="/services">Services</Link>
        //         </li>
        //         <li>
        //             <Link to="/projects">Projects</Link>
        //         </li>
        //         <li>
        //             <Link to="/contact">Contact</Link>
        //         </li>
        //     </ul>
        // </nav>

        <nav>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <span>Barrett Software Solutions</span>
                </div>
                <ul className="navbar-menu">
                    <li>
                        <NavLink to="/" exact activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" activeClassName="active">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" activeClassName="active">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;