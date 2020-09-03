// File: Pomodoro.jsx
// Date: 7/25/2020
// Note: Applied CSS Flexbox Module

import React from 'react';
import PropTypes from 'prop-types';
import Format from 'pretty-ms';
import './Pomodoro.sass';


console.log("Mounting Pomodoro.jsx... <Pomodoro />");

class Pomodoro extends React.Component {
    render() {
        return (
            <div className='pomodoro'>
                <div className='flex-container'>
                    <div className='flex-items'>
                        <h3>Pomodoro</h3>
                        <div className='break-time'>Break Time</div>
                        <div className='session-time'>Session Time</div>
                        <div className='start-stop'>Timer</div>
                    </div>
                </div>
            </div>
        )
    }
}

Pomodoro.propTypes = {

}

export default Pomodoro;

// eof
