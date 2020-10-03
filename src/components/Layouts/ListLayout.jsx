// File: ListLayout.jsx
// Date: 10/2/2020
// Note: Applied HTML source order with Flexbox Module

import React from 'react';
import PropTypes from 'prop-types';
import './ListLayout.sass';

class ListLayout extends React.Component {
    
    render() {
        return (            
            <div className='flex-wrapper'>
                <h2>
                    <span>h2 - {this.props.id}</span>
                    {": "}
                    <label htmlFor='grid-layout'>{this.props.name}</label>
                </h2>
            
                <ul className="flex-container">
                    <li className="flex-item">1</li>
                    <li className="flex-item">2</li>
                    <li className="flex-item">3</li>
                    <li className="flex-item">4</li>
                    <li className="flex-item">5</li>
                    <li className="flex-item">6</li>
                </ul>
            </div>
        )
    }
}

ListLayout.propsType = {
    name: PropTypes.string,
}

export default ListLayout;

// eof