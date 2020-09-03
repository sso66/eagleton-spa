// File: ListLayout.jsx
// Date: 7/23/2020
// Note: Applied CSS Flexbox Module

import React from 'react';
import PropTypes from 'prop-types';
import './ListLayout.sass';

class ListLayout extends React.Component {
    
    render() {
        return (            <
            div className='list-page-wrapper'>
                <h2>
                    <span>{this.props.id}</span>
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

ListLayout.prosType = {

}

export default ListLayout;

// eof