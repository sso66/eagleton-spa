import React from 'react';
import gsap from "gsap";

class InputModalGSAP extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.modalRef = createRef();
    this.overlayRef = createRef();

    this.state = { value: props.initialValue };

    const onComplete = () => {
      this.inputRef.current.focus();
    };
    const timeline = gsap.timeline({ paused: true, onComplete });
    this.timeline = timeline;
  }
  componentDidMount() {
    this.timeline
      .from(this.overlayRef.current, {
        duration: 0.25,
        autoAlpha: 0
      })
      .from(this.modalRef.current, {
        duration: 0.25,
        autoAlpha: 0,
        y: 25
      });
    this.timeline.play();

    document.body.addEventListener("click", this.onClickOutside);
  }
  componentWillUnmount() {
    this.timeline.kill();
    document.removeEventListener("click", this.onClickOutside);
  }

  onClickOutside = e => {
    const { onClose } = this.props;
    const element = e.target;
    if (this.modalRef.current
        && !this.modalRef.current.contains(element)) {
      e.preventDefault();
      e.stopPropagation();
      onClose();
    }
  };

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
      <div className="modal--overlay" ref={this.overlayRef}>
        <div className="modal" ref={this.modalRef}>
          <h1>Insert a new value</h1>
          <form action="?" onSubmit={this.onSubmit}>
            <input
              ref={this.inputRef}
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

export default InputModalGSAP;