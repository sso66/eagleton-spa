// File: EventButton.jsx
// Date: 6/26/2020
// Note: React JSX Ways of Binding Events

import React from 'react';
import './ParentChildButton.sass';

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    
        this.callOnClick = this.callOnClick.bind(this);
    }
    
    // callOnClick() {
    	// console.log("Button is clicked!");
    // }
 
    callOnClick = (e) => {
        // console.log("Button is clicked!", e.target.name);   
        this._display(e);

    }   
    
    callOnClickMe = (e) => {
        // console.log("Button is clicked!", e.target.name);    
        this._display(e);
    }   

    _display(e) {
        // console.log("Button is clicked!", e.target.name);    
        alert("Button is clicked! -> " + e.target.name);
    }
    
    render() {
        return (
            <div className="parent-child">
                <button name="Parent" onClick={this.callOnClick}>Click parent!</button>
                <button name="Me" onClick={(e) => this.callOnClickMe(e)}>
                    Click me!
                </button>
                
                <ChildComponent callOnClick={this.callOnClick} />
                <ActionLink />
            </div>
        )   
    }
}

class ChildComponent extends React.Component {
    render() {
        // props is the only way you can bind parent component's function with child component events.
        return <button name="Child" onClick={this.props.callOnClick}>Click child!</button>
    }
}


function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('Hypertext Link is clicked.');
    }
  
    return (
        <a href="#goto" onClick={handleClick}>
            Click me
        </a>
    );
}

export default ParentComponent;

// eof
