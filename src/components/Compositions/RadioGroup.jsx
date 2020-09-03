// RadioGroup.jsx
// Date: 7/15/2020
// Note: React Composition Model: Composable Components

import React from 'react';

class RadioGroup extends React.Component {
    constructor() {
        super();

        // Bind the method to the component context
        this.renderChildren = this.renderChildren.bind(this);
    }

    // renderChildren() {
    //     // TODO: Change the name prop of all children
    //     // to this.props.name
    //     return this.props.children
    // }

    // renderChildren() {
    //     return React.Children.map(this.props.children, child => {
    //       // TODO: Change the name prop to this.props.name
    //       return child
    //     })
    // }
    
    // Immutably cloning elements
    renderChildren() {
        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                name: this.props.name,
            })
        })
    }
    
    render() {
        return (
          <div className="group">
            {this.renderChildren()}
          </div>
        )
    }
}

export default RadioGroup;

// eof