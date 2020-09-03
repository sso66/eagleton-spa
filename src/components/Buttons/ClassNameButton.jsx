// File: ClassNameButton.jsx
// Date: 7/22/2020
// Date: classnames NPM use-case 

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ClassNameButton.sass';

class ClassNameButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            btn: true,
            isPressed: false,
            isHovered: false,
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleOver = this.handleOver.bind(this);
    }

    handleClick() {
        this.setState({ isPressed: 'btn-pressed'});
    }

    handleOver() {  
        this.setState({ isHovered: 'btn-over'});
    }

    render() {

        const btnClass = classNames({
            btn: this.state.btn,
            'btn-pressed': this.state.isPressed,
            'btn-over': !this.state.isPressed && this.state.isHovered,
            'btn-out': this.state.isOut,
        });

        return(
            <div className='btn-change'>
                <button 
                    className={btnClass}
                    onClick={this.handleClick}
                    onMouseOver={this.handleOver}
                >
                    {this.props.label}
                </button>
            </div>
        )
    }
}

ClassNameButton.propTypes = {

}

export default ClassNameButton;

// eof