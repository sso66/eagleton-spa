// File: containers/Calculator
// Date: 6/28/2020
// Note: Lifting State Up

import React from 'react';
import TemperatureInput from '../components/TemperatureInput';

class Calculator extends React.Component {
    render() {
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        );
    }
  }

  export default Calculator;

  // eof
