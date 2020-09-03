import React, { createRef } from 'react'

class ActionButtonRef extends React.Component {

  constructor() {
    super()
    this.buttonRef = createRef()
  }

  render() {
    const { label, action } = this.props
    return (
      <button onClick={action} ref={this.buttonRef}>{label}</button>
    )
  }
}

export default ActionButtonRef;
