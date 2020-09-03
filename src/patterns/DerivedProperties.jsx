// File: DerivedProperties.jsx
// Date: 06/29/2020
// Note: PROPS CAN BE STATE, PROPS, OR DERIVED PROPERTIES
//..............................................................................
import React from 'react';
import './App.sass'; 

console.log("Mounting App.jsx..." );

// Regardless of passing props or state to a component, the component just 
// receives the data as props. It doesn't differentiate between props or state. 
// Everything incoming is props, everything managed by the component itself is 
// state. However, there is one other thing apart from props and state which is 
// sometimes mentioned: derived props (derived properties). Basically it is the 
// same as props, but only a variation of the props before they are passed to the 
// next component.
 
class DerivedProperties extends React.Component {
    render() {
        const greeting = {
            subject: 'React: PROPS CAN BE STATE, PROPS, OR DERIVED PROPERTIES',
            description: 'Your component library for ...',
        };
 
        return (
            <div>
                <Greeting greeting={greeting} />
            </div>
        );
    }
}
 
const Greeting = ({ greeting }) =>
    <div className="App">
        <Title title={`Welcome to ${greeting.subject}`} />
        <Description description={greeting.description} />
    </div>
 
const Title = ({ title }) =>
    <h1>{title}</h1>;
 
const Description = ({ description }) =>
    <p>{description}</p>;
 
export default DerivedProperties;

// In this scenario, the title in the Title component is a derived property
// from props plus a string interpolation in the Greeting component. This is 
// the most basic example for it, but you can imagine how state or any other 
// business logic could be used to change the passed props on the way down the 
// component tree. Later you will learn about derived state too.
//
// eof
