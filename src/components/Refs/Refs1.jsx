import React from 'react'

class ActionButton extends React.Component {

  render() {
    const { label, action } = this.props
    return (
      <button onClick={action}>{label}</button>
    )
  }
}

export default ActionButton;
