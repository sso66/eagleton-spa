// SortChildren.jsx
// Date: 7/15/2020
// Note: React Composition Model: Composable Components

import React from 'react';

class SortChildren extends React.Component {
    render() {
        const children = React.Children.toArray(this.props.children);

        return <p>{children.sort().join(' ')}</p>
    }
}

export default SortChildren;
