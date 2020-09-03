// File: PropsPass.jsx
// Date: 06/29/2020
// Note: HOW TO PASS PROPS FROM CHILD TO PARENT COMPONENT? 
//..............................................................................
import React from 'react';
import './App.sass'; 

console.log("Mounting App.jsx..." );

// This a common question for React beginners and the answer for it is brief: 
// there is no way to pass props from a child to a parent component. Let's 
// revisit the previous example, but this time with an additional Button 
// component for the toggle mechanism
 
class PropsPass extends React.Component {
    render() {
        const greeting = 'Welcome to React';
 
        return (
            <div>
                {this.state.isShow ? <Greeting greeting={greeting} /> : null}
 
                <Button />
            </div>
        );
    }
}
 
class Button extends React.Component {
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
        return (
            <button onClick={this.toggleShow} type="button">
                Toggle Show
            </button>
        );
    }
}
 
const Greeting = ({ greeting }) => <h1>{greeting}</h1>;
 
export default PropsPass;

// So far, the Button component manages its own co-located state. Since the Button
// component manages the isShow property, there is no way to pass it up as props to 
// the App component. The App component needs the isShow property though for the 
// conditional rendering of the Greeting component. At the moment, the application 
// WOULDN'T work this way. That's the point when you have to lift state up for making 
// it accessible for other components (in this case the App component itself) as state
// (or as passed props for other components).

// eof

// Failed to compile
// Line 21:18:  'isShow' is not defined  no-undef       
