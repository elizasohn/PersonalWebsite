import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="nav-container">
            <ul className="nav-initials">
                <li className="list-item">
                    <h1>ES</h1>
                </li>
            </ul>
            <ul className="nav-list">
                <li className="list-item">
                    <Link className="nav-link" alt="link to about" to='/'>
                        <h1>About</h1>
                    </Link>
                </li>
                <li className="list-item">
                    <Link className="nav-link" alt="link to projects" to='/projects'><h1>Projects</h1></Link>
                </li>
                <li className="list-item">
                    <Link className="nav-link" alt="link to resume" to='/resume'><h1>Resume</h1></Link>
                </li>
                <li className="list-item">
                    <Link className="nav-link" alt="link to about" to='/contact'><h1>Contact</h1></Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;