// File: TemperatureInput.jsx
// Date: 6/28/2020
// Note: Lifting State Up

import React from 'react';

// Adding a Second Input
// Our new requirement is that, in addition to a Celsius input, we provide a 
// Fahrenheit input, and they are kept in sync.

// We can start by extracting a TemperatureInput component from Calculator. 
// We will add a new scale prop to it that can either be "c" or "f":

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };
  
  class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {temperature: ''};
    }
  
    handleChange(e) {
      this.setState({temperature: e.target.value});
    }
  
    render() {
      const temperature = this.state.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }

  export default TemperatureInput;
  
  // eof