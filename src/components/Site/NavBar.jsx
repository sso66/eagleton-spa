// File: NavBar.jsx
// Date: 7/10/2020
// Note: React ES6 Component API

import React from 'react';
import { Link } from 'react-router-dom'

// import './Site.sass';

// creates links to be used to navigate between routes
const NavBar = (props) =>
    <nav className='navbar'>
        <ul className="navbar navlink">
            {/* <li><Link to='/'>Home</Link></li> */}
            {/* <li><Link to='/roster'>Dashboard</Link></li>
            <li><Link to='/schedule'>About</Link></li> */}
        </ul>
    </nav>

export default NavBar;

// eof
