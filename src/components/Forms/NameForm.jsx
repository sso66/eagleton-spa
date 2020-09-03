// File: forms/NameForm.jsx
// Date: 6/27/2020
// Note: Controlled Components in React JS

import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
      };
      // ES5+ manual event binding
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      console.log('A name was changed: ' + event.target.value);
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      // console.log('A name was submitted: ' + this.state.value);
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default NameForm;

// eof