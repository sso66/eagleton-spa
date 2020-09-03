// IgnoreFirstChild.jsx
// Date: 7/15/2020
// Note: React Composition Model: Composable Components

import React from 'react';

class IgnoreFirstChild extends React.Component {

    render() {
        const children = this.props.children;
        return (
            <div>
                {/* Looping over children */}
                {React.Children.map(children, (child, i) => {
                    //  Ignore the first child
                    if (i < 1) return
                    return child
                })}
            </div>
        )
    }
}

export default IgnoreFirstChild;
