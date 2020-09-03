// File: ToggleButton.jsx
// Date: 6/26/2020   
// Note: Event Handler and State Management

import React from 'react';
import './ToggleButton.sass';

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <div className="toggle-button">
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

export default ToggleButton;

// eof
