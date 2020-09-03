import React from "react";

class InputModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: props.initialValue };
  }

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    const { onSubmit, onClose } = this.props;
    onSubmit(value);
    onClose();
  };
  render() {
    const { value } = this.state;

    return (
      <div className="modal--overlay">
        <div className="modal">
          <h1>Insert a new value</h1>
          <form action="?" onSubmit={this.onSubmit}>
            <input
              type="text"
              onChange={this.onChange}
              value={value}
            />
            <button>Save new value</button>
          </form>
        </div>
      </div>
    );
  }
}

export default InputModal;