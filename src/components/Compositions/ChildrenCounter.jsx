// ChildrenCounter.jsx
// Date: 7/15/2020
// Note: React Composition Model: Composable Components

import React from 'react';

class ChildrenCounter extends React.Component {
    render() {
        return <p>{React.Children.count(this.props.children)}</p>
    }
}

export default ChildrenCounter;

// eof
