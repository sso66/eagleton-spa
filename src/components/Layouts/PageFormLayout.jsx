// File: PageFormLayout.jsx
// Date: 7/23/2020
// Note: Applied CSS Flexbox Module

import React from 'react';
import PropTypes from 'prop-types';
import './PageFormLayout.sass';

class PageFormLayout extends React.Component {

    render() {

        return (
            <ul className="navigation">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contact</a></li>
          </ul>           
        )
    }
}

PageFormLayout.propTypes = {

}

export default PageFormLayout;

// eof
