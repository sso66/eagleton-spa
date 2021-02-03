// File: NavBar.jsx
// Date: 7/10/2020
// Note: React ES6 Component API

import React from 'react';
import { Link } from 'react-router-dom';

// creates links to be used to navigate between routes
const Header = () =>
    <header>
    <nav className=''>
        <ul className="">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/roster'>Roster</Link></li>
            <li><Link to='/schedule'>Schedule</Link></li>
        </ul>
    </nav>
    </header>
export default Header;

// eof
