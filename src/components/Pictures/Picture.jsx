// File: Picture.jsx
// Date: 7/14/2020
// Note: React's props.children / props.children()

import React from 'react';
import './Picture.sass';

const Picture = (props) => {
    return (
        <div className="picture">
            <img 
                src={props.src} 
                alt={props.alt} 
                className="picture" 
            />
                {props.children}
        </div>
    )
}

export default Picture;

// eof
