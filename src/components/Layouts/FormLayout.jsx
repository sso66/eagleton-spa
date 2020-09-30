// File: FormLayout.jsx
// Date: 7/24/2020
// Note: Applied CSS Flexbox Module

import React from 'react';
import PropTypes from 'prop-types';

import './FormLayout.sass';
import logo from '../../images/eagleton-spa.png';
import logoAlpha from '../../images/eagleton-spa-alpha.png';

class FormLayout extends React.Component {

    render() {
        const { heading, content } = this.props;

        return (
            <div className='form-layout'>
                <div className='flex-container'>
                    <div className='flex-items'>
                        <h3>
                            <img src={logoAlpha} alt='FormLayout' />
                            heading: {heading}
                        </h3>
                        <p>
                            <img src={logo} alt='FormLayout' />
                            content: {content}
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
