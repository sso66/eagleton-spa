// File: MyComponent.jsx
// Date: 7/11/2020
// Note: State Design Patterns

import React from 'react';
import PropTypes from 'prop-types'

import './MyComponent.sass'
import { Props } from '../../patterns';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

        this.handleSomething = this.handleSomething.bind(this);
    }

    incrementCount() {
        // this.setState({count: this.state.count + 1});
        this.setState((state) => {
            return { count: state.count + 1 } 
        });
    }
    
    handleSomething() {
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }
    
    componentDidMount() {
        this.handleSomething();
    }

    render() {
        return (
            <div className='my-component'>
                <span>Count: {this.state.count} </span>

                <button
                    onClick={this.handleSomething}
                >
                    Increment
                </button>
            </div>
        )
    }
}
// React State
// 1. this.state
// 2. this.setState()
// 3. this.forceUpdate()
// 4. defaultProps
// 5. defaultName


MyComponent.propTypes = {
    count: PropTypes.number
}

export default MyComponent;

// eof
