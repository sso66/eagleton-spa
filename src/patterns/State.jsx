// File: State.jsx
// Date: 06/29/2020
// Note: REACT PROPS VS. STATE
//..............................................................................
import React from 'react';
import './App.sass'; 

console.log("Mounting App.jsx..." );

// Passing only props from component to component doesn't make the component 
// interactive, because nothing is there to change the props. Props are read-only.
// That's the time when React State comes into play which can be changed. The state 
// is co-located to a React component.
//
class State extends React.Component {
    constructor(props) {
        super(props);
 
        this.state = {
            isShow: true,
        };
    }
 
    toggleShow = () => {
        this.setState(state => ({ isShow: !state.isShow }));
    };
 
    render() {
        const greeting = 'Welcome to React';

        return (
            <div className="App">
                {/* {this.state.isShow ? <Greeting greeting={greeting} /> : null}  */}
                <Greeting greeting={greeting} isShow={this.state.isShow} />
                <button onClick={this.toggleShow} type="button">
                    Toggle Show
                </button>
            </div>
        );
    }
}
 
// const Greeting = ({ greeting }) => <h1>{greeting}</h1>;

// In this case, the code uses a ternary operator to either show the greeting or not. 
// You can read up this tutorial about all the conditional renderings in React. The state
// makes the React components interactive. You can read and write state, whereas props are 
// read-only. Once the state changes, the component renders again. In addition, state can be
// passed as props to child components too.

const Greeting = ({ greeting, isShow }) =>
  isShow ? <h1>{greeting}</h1> : null;

// The child component doesn't know whether the incoming props are state or props from the 
// parent component. The component just consumes the data as props. And the child component
// re-renders too once the incoming props changed.

// In conclusion, every time the props or state change, the rendering mechanism of the affected
// component is triggered. That's how the whole component tree becomes interactive, because after 
// all, state is passed as props to other components, and once the state in a component changes, 
// which may be passed as props to the child components, all affected components render again.  

export default State;

// eof
