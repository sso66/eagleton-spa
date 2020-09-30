// File: Dashboard.jsx
// Date: 7/31/2020
// Note: React ES6 Component API

import React from 'react';
import PropTypes from 'prop-types';
import './DashboardView.sass';
import logo from '../../images/eagleton-spa-alpha.png';

//  UIViewModel - "scope": text
const NavbarItem = (props) => (
    <a className="navbar-item is-capatalized" href={`#${props.page}`}>
        {props.page}
    </a>
)
//  UIViewModel - "scope": image
const NavbarLogo = (props) => (
    <a className='logo'><img src={logo} alt="Eagleton Web Designs" />
        {props.id}{props.name}
    </a>
)

// UIView - "context"
const NavbarBurger = (props) => (
    <button
        onClick={props.toggleMenu}
        className={`button navbar-burger ${props.active ? 'is-active' : ''}`}
    >  
        <span />
        <span />
        <span />
    </button>
)

// UIViewController - "function"
// class UINavbarViewController extends React.Component {
class DashboardView extends React.Component {

    state = {
        activeMenu: false,
    }
    
    toggleMenu = () => {
        this.setState({
            activeMenu: !this.state.activeMenu,
        });
    }

    render() {
        let { pages = [], color } = this.props;
        let navbarItems = pages.map(page => <NavbarItem page={page} key={page}/>);

        return(
            <div className='dashboard-view'>Dashboard
                <h2>UINavbarViewController</h2>
                <nav className={`navbar is-fixed-top is-${color}`}>
                    <div className='navbar-item is-lowercase'>
                        <NavbarLogo name='  EagletonWA' />
                        <NavbarItem />
                        <NavbarBurger
                            active={this.state.activeMenu}
                            toggleMenu={this.toggleMenu}
                        />
                    </div>
                    <div
                        className={`navbar-menu ${this.state.activeMenu ? 'is-active': ''}`}
                    >
                        <div className='navbar-start'>{navbarItems}</div>
                    </div>
                </nav>
            </div>
        )
    }
}

// UINavbarViewController.propTypes = {
DashboardView.propTypes = {
    // pages: PropTypes.array.isRequired,
    color: PropTypes.string,
}

// export default UINavbarViewController;
export default DashboardView;

// eof
