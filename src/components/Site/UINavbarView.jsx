// File: UINavbarView.jsx
// Date: 7/23/2020
// Note: Applied CSS Flexbox Module

import React from 'react';
import PropTypes from 'prop-types';
import './UINavbarView.sass';

class UINavbarView extends React.Component {

    render() {

        return (
            <ul className="navigation">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/product">Products</a></li>
                <li><a href="/contact">Contact</a></li>
          </ul>           
        )
    }
}

UINavbarView.propTypes = {

}

export default UINavbarView;

// eof
