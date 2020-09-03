// File: App.Props.Code.jsx
// Date: 06/29/2020
// Note: REACT PROPS AND CODE STYLE
//..............................................................................
import React from 'react';
import logo from './logo.svg'
import './App.sass'; 

console.log("Mounting App.jsx..." );

// Passing lots of props down to a component can have a terrible effect on 
// the code style:

class PropsCode extends React.Component {
  render() {
        const greeting = {
            subject: 'React',
            description: 'Your component library for ...',
    }   ;
        // So how to overcome this bad code style which is hard to read and
        // maintain? 
        //
        // One way would be passing the props with multiple indented lines to a 
        // component. The destructuring could follow the same rules:
        return (
            <div className="App">
                {/* <Greeting subject={greeting.subject} description={greeting.description} logo={logo} /> */}
                <Greeting 
                    subject={greeting.subject} 
                    description={greeting.description} 
                    logo={logo} 
                />
            </div>
        );
    }
}
 
const Greeting = ({ subject, description, logo }) => (
    <>
        <p>{subject}</p> 
        <p>{description}</p>
        <a href="#"><img src={logo} width="64px" height="64px" /></a>
    </>   
)
export default PropsCode;

// eof
