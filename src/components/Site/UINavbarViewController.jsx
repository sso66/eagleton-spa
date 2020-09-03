// File: UINavbarViewController.jsx
// Date: 7/28/2020
// Note: React ES6 Component Architecture & API

import React from 'react';
import PropTypes from 'prop-types';

const NavbarItem = (props) => (
    <a href='#'>
        NavbarItem
        {props.page}
    </a>
)
const NavbarBurger = (props) => (
    <button>
        NavbarBurger
        <span /> span
        <span /> span
        <span /> span
        <span /> span
    </button>
)

class UINavbarViewController extends React.Component {
    render() {
        return(
            <div className='ui-navbar-view-controller'>
                <h2>UINavbarViewController</h2>
                <nav className='hero is-primary'>
                    Navbar Bulma NPM
                    <NavbarItem />
                    <NavbarBurger />
                </nav>
            </div>
        )
    }
}

UINavbarViewController.propTypes = {

}

export default UINavbarViewController;

// eof
