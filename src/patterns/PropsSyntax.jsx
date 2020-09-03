// File: App.Prop.Syntax.jsx
// Date: 06/29/2020
// Note: REACT ...PROPS SYNTAX
//..............................................................................
import React from 'react';
import './App.sass'; 

console.log("Mounting App.jsx..." ); 

// Passing lots of props down to a component can have a terrible effect on 
// the code style:
// 
// Another strategy for passing all props to a child component is the 
// JavaScript spread operator. JavaScript's spread operator in React is a useful
// power feature and you can read people referring to it as the React ...props 
// syntax even though it is not really a React feature but just a thing coming 
// from JavaScript.
//
class PropsSyntax extends React.Component {
    render() {
        const greeting = {
            subject: 'React',
            description: 'Your component library for ...',
        };
   
        return (
            <div>
                <Greeting {...greeting} />
            </div>
        );
    }
}
   
// const Greeting = ({ subject, description }) => (
//     <div>
//         <Title title={`Welcome to ${subject}`} />
//         <Description description={description} />
//     </div>
// );

const Greeting = ({ subject, ...other }) => (
    <div>
      <Title title={`Welcome to ${subject}`} />
      <Description {...other} />
    </div>
);  

const Title = ({ title }) => <h1>{title}</h1>;
   
const Description = ({ description }) => <p>{description}</p>;

export default PropsSyntax;

// The props spreading can be used to spread a whole object with key value pairs 
// down to a child component. It has the same effect as passing each value of the
// object by its own to the component as before. The child component gets the props
// the same way as before too. 
//
// Another thing which builds up on top of the prop spread is the prop spread with rest
// operator.
//
// As you can see, in the Greeting component the props are destructured but with a rest 
// assignment which is called other in this case. So you have the subject prop but also 
// the other prop which is essentially just an object with all the remaining properties
// (in this case only the description). Now you can spread the rest of the props to the 
// Description component, because all the relevant props for the other components (here
// the Title component) were separated from it.

// eof
