// File: Timer.jsx
// Date: 7/24/2020
// Note: Applied CSS Flexbox Module

import React from 'react';
import PropTypes from 'prop-types';
import Format from 'pretty-ms';
import './Timer.sass';

console.log("Mounting Timer.jsx... <Timer />");

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timeDuration: 0,
            timeInterval: 0,
            isOn: false,
        }

        this.handleStartTimer = this.handleStartTimer.bind(this);
        this.handleStopTimer = this.handleStopTimer.bind(this);
        this.handleResetTimer = this.handleResetTimer.bind(this);
    }

    handleStartTimer() {
        this.timer = this.setState({
            timeDuration: this.state.timeDuration,
            timeInterval: Date.now() - this.state.timeDuration,
            isOn: true,
        })
        this.timer = setInterval(() => this.setState({
            timeDuration: Date.now() - this.state.timeInterval
        }), 1);

        console.log("Start");
    }

    handleStopTimer() {
        this.setState({ isOn: false })
        clearInterval(this.timer);
        
        console.log("Stop");
    }

    handleResetTimer() {
        this.setState ({ timeDuration: 0 });

        console.log("Reset")
    }

    render() {
        let start = (this.state.timeDuration === 0) ?
            <button onClick={this.handleStartTimer}>Start</button> :
            null

        let stop = (this.state.isOn) ?
            <button onClick={this.handleStopTimer}>Stop</button> :
            null
        
        let reset = (this.state.timeDuration !== 0 && !this.state.isOn) ?
            <button onClick={this.handleResetTimer}>Reset</button> :
            null
        
        // it means to do again after a pause or an interruption...
        let resume = (this.state.timeDuration !== 0 && !this.state.isOn) ?
            <button onClick={this.handleStartTimer}>Resume</button> :
            null

        return (
            <div className='timer'>
                <div className='flex-container'>

                    <div className='flex-items'>
                        <h3>Timer</h3>
                        <h4>{Format(this.state.timeDuration)}</h4>
                        {start}
                        {resume}
                        {stop}
                        {reset}
                   </div>
                </div>
            </div>
        )
    }
}

Timer.propTypes = {

}
export default Timer;

// eof
