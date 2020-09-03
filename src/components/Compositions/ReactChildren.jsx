// ReactChildren.jsx
// Date: 7/15/2020
// Note: React Composition Model: Composable Components

import React from 'react';

class ReactChildren extends React.Component {

    render() {
        return (
            this.props.children()
        )
    }
}

export default ReactChildren;

// eof
