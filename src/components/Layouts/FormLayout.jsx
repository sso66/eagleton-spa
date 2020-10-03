// File: FormLayout.jsx
// Date: 10/2/2020
// Note: Applied HTML source order with Flexbox Module

import React from 'react';
import PropTypes from 'prop-types';

import './FormLayout.sass';
import logo from '../../images/eagleton-spa.png';
import logoAlpha from '../../images/eagleton-spa-alpha.png';

class FormLayout extends React.Component {

    render() {
        const { heading, content } = this.props;

        return (
            <div className='flex-wrapper'>
                <div className='flex-container'>
                    <div className='flex-items'>
                        <h2>
                            <img src={logoAlpha} alt='FormLayout' className='logoAlpha' />
                            h2 - Heading: {heading}
                        </h2>
                        <p>
                            <img src={logo} alt='FormLayout' className='logo' />
                            Content: {content}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

FormLayout.propTypes = {
    heading: PropTypes.string,
    content: PropTypes.string,
}

export default FormLayout;

// eof
