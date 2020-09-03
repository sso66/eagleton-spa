import React, { createRef } from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = createRef()
  
    this.state = { storedValue: '' }
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({ storedValue: this.inputRef.current.value })
  }  

  render() {

    return (
      <div className="modal">
        <form action="?" onSubmit={this.onSubmit}>
          <input
            ref={this.inputRef}
            type="text"
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }  
}

export default Form;
