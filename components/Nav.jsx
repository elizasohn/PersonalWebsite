import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul className="nav-list">
                <li className="list-item">
                    <Link className="nav-link" alt="link to about" to='/'>About</Link> |{" "}
                </li>
            </ul>
            <ul className="nav-list">
                <li className="list-item">
                    <Link className="nav-link" alt="link to projects" to='/projects'>Projects</Link>|{" "}
                </li>
            </ul>
            <ul className="nav-list">
                <li className="list-item">
                    <Link className="nav-link" alt="link to resume" to='/resume'>Resume</Link>|{" "}
                </li>
            </ul>
            <ul className="nav-list">
                <li className="list-item">
                    <Link className="nav-link" alt="link to about" to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;