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
                <Link className="nav-link" alt="link to about" to='/'>
                    <li className="list-item">
                        <h1>About</h1>
                    </li>
                </Link>
                <Link className="nav-link" alt="link to projects" to='/projects'>
                    <li className="list-item">
                        <h1>Projects</h1>
                    </li>
                </Link>
                <Link className="nav-link" alt="link to resume" to='/resume'>
                    <li className="list-item">
                        <h1>Resume</h1>
                    </li>
                </Link>
                <Link className="nav-link" alt="link to about" to='/contact'>
                    <li className="list-item">
                        <h1>Contact</h1>
                    </li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;