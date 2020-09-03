// File: Calculator.jsx
// Date: 6/28/2020
// Note: Lifting State Up

import React from 'react';
import './Calculator.sass';

// It accepts the celsius temperature as a prop, and prints 
// whether it is enough to boil the water:
// 
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

// It renders an <input> that lets you enter the temperature, and 
// keeps its value in this.state.temperature. Additionally, it 
// renders the BoilingVerdict for the current input value.
//
  class Calculator extends React.Component {
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
      return (
        <form>
          <fieldset>
            <legend>Enter temperature in Celsius: Lift State Up</legend>
            <input 
              value={temperature}
              onChange={this.handleChange} />
            <BoilingVerdict
              celsius={parseFloat(temperature)} />
          </fieldset>
        </form>
      );
    }
  }

  export default Calculator;

  // eof 
