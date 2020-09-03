// File: LiftingState.jsx
// Date: 06/29/2020
// Note: HOW TO PASS PROPS FROM CHILD TO PARENT COMPONENT? Lifting State
//..............................................................................
import React from 'react';
import './App.sass'; 

console.log("Mounting App.jsx..." );
// The process of refactoring substate from one component to another
// is known as lifting state.
//
class LiftingState extends React.Component {
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
        const greeting = 'Lifting State: Process of Refactoring!';
 
        return (
            <div className="App">
                {/* {this.state.isShow ? <Greeting greeting={greeting} /> : null} */}
                <Greeting greeting={greeting} isShow={this.state.isShow} />

                <Button onClick={this.toggleShow} />
            </div>
        );
    }
}
 
const Button = ({ onClick }) => (
    <button onClick={onClick} type="button">
        Toggle Show
    </button>
);
 
// const Greeting = ({ greeting }) => <h1>{greeting}</h1>;

// The important ingredient is that the App component passes down a function 
// in the props to the Button component now. The function is used for the click 
// handler in the Button component. However, the Button doesn't know the business 
// logic of the function, only that it has to trigger the function when the button 
// gets clicked. Above in the App component, the state is changed when the passed 
// function is called, and thus all affected components, which use the changed state 
// or consume it as props, render again. Now you can even pass the state as props to 
// the Greeting component.


const Greeting = ({ greeting, isShow }) =>
  isShow ? <h1>{greeting}</h1> : null;

// As said, there is no way passing props from a child to a parent component. But you 
// can always pass functions from parent to child components, whereas the child components 
// make use of these functions and the functions may change the state in a parent component 
// above. Once the state has changed, the state is passed down as props again. All affected 
// components will render again. For instance, the same pattern applies for having page 
// components in your React application. Once you want to pass data from page to another 
// in React, you can lift the state up to the component (usually App component) which has 
// all page components as its child components. Then the data is managed as state in the top 
// level component but still can be distributed to all child components.

export default LiftingState;

// eof
