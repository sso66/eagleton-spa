// File: LoggingButton.jsx
// Date: 6/27/2020
// Note: Handling Events in React

import React from 'react';

class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax. It works and 
    // it's recommended function
    handleClick = () => {
      // console.log('this is:', this);
      alert('this is ' + this.handleClick);
    }
  
    render() {
      return (
        <button onClick={this.handleClick} className='logging-button'>
          Click me
        </button>
      );
    }
  }

  export default LoggingButton;

  // eof
