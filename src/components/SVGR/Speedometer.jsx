// File: Speedometer.jsx
// Date: 7/27/2020
// Note: SVG whole/part-of React Component API

import React from 'react';
import './Speedometer';

class Speedometer extends React.Component {

    render() {
        return(
            <div className='speedometer'>
                <svg
                    viewBox='0 0 400 400'
                    className='flex-container'
                >
                    <svg className='flex-items'>
                        <circle 
                            r="150" 
                            cx="50%" 
                            cy="50%" 
                            fill="tomato" 
                            stroke="lightgreen"
                            strokeWidth="25"
                            strokeDasharray="471 943"
                        />
                    </svg>
                </svg>    
            </div>
        )
    }
}

export default Speedometer;
