// File: Clock.jsx
// Date: 6/25/2020
// Note: State and Lifecycle

import React from 'react';
import PropTypes from 'prop-types';

import './Clock.sass';

console.log("Mounting Clock.jsx..." );

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this._tick(),
            1000
        );  
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    
    _tick() {
        this.setState({
            date: new Date(),
        })    
    }
    
    render() {
        return (
            <div className="clock">
                <h2 className="title">{this.props.title}</h2>
                <h3 className="content">Today: {this.state.date.toLocaleString()}</h3>
            </div>
        )  
    }
}

Clock.propTypes = {
    title: PropTypes.string,
    date: PropTypes.node
}

export default Clock;

// eof

