// File: PictureButton.jsx
// Date: 6/28/2020
// Note: ReactJSX Generic Button

import React from 'react';

class PictureButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pictureId: null,
            label: null
        }

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(src) {
        src.includes('200x100') 
            ? this.setState({pictureId:this.props.id, label:'Small'})
            : this.setState({pictureId:this.props.id, label:'Large'})
    }

    componentDidMount() {
        this.handleOnChange(this.props.pictureSrc);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.handleOnClick(this.props.id)}>
                    {this.state.label}
                </button>
            </div>
        )
    }
}

export default PictureButton;

// eof
