// File: GridLayout.jsx
// Date: 7/31/2020
// Note: Applied CSS Flexbox Module

import React from 'react';
import PropTypes from 'prop-types';
import './GridLayout.sass';

class GridLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, name } = this.props;

        return (
            <div className='grid-page-wrapper'>
                <h2>
                    <span>{this.props.id}</span>
                    {": "}
                    <label htmlFor='grid-layout'>{this.props.name}</label>
                </h2>

                <div className='row'>
                    <div className='column'>
                        <div className='blue-column'>
                            Some Text in Column 1 Row 1
                        </div>
                    </div>
                    <div className='column'>
                        <div className='green-column'>
                            Some Text in Column 1 Row 2
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='column'>
                        <div className='yellow-column'>
                            Some Text in Column 2 Row 1
                        </div>
                    </div>
                    <div className='column'>
                        <div className='red-column'>
                            Some Text in Column 2 Row 2
                        </div>
                    </div>
                </div>
            </div>         
        )
    }
}

GridLayout.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
}

export default GridLayout;

// eof
