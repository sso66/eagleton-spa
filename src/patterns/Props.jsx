// File: App.Props.jsx
// Date: 06/29/2020
// Note: WHAT ARE PROPS IN REACT?
//..............................................................................
import React from 'react';
import './App.sass'; 

console.log("Mounting App.jsx..." );

class Props extends React.Component {
    render() {
        // const greeting = 'Welcome to React';
        // 
        // As you have seen, props enable you to pass variables from one to another component down 
        // the component tree. In the previous example, it was only a string variable. But props can 
        // be anything from integers over objects to arrays. Even React components, but you will learn 
        // about this later. You can also define the props inline. In case of strings, you can pass 
        // props inside double quotes (or single quotes) too.
        return (           
            <div className="App">
                {/* <h1>{greeting}</h1> */}
                {/* <Greeting greeting={greeting} /> */}
                <Greeting greeting={{ text: 'Welcome to React' }} />
            </div>
        );
    }
}

// class Greeting extends React.Component {
//     render() {
//         const greeting = 'Welcome to React';
   
//         // return <h1>{greeting}</h1>;
//         return <h1>{this.props.greeting}</h1>
//     }
// }

// A common question followed by this act: how to pass the data as params (parameters) 
// from one React component to another component? That's because you don't want to have 
// a component rendering static data, but pass dynamic data to your component instead. 
// That's where React's props come into play. You can pass data in React by defining 
// custom HTML attributes to which you assign your data with JSX syntax. So don't forget 
// the curly braces.

// As you can see, the props are received in React's class component via the this 
// instance of the class. A common question which comes up then: Why aren't the props 
// received in the render methods signature? It would be similar to functional stateless 
// components then. As for now, the team behind React considered it, but didn't change 
// the API for React class components yet. Maybe it will be changed at some point.

// In a functional stateless component, the props are received in the function signature 
// as arguments:
//
// const Greeting = props => <h1>{props.greeting}</h1>;

// Since you will find always the props in the function signature, which most of the time
// is only the container object of your data, but not the data to be used, you can destructure 
// the props early in the function signature. One would call it React props destructuring:
//
// const Greeting = ({ greeting }) => <h1>{greeting}</h1>;

const Greeting = ({ greeting }) => <h1>{greeting.text}</h1>;

// Note: It is important to note that is could lead to performance issues, because 
// every time the component renders a new object is created again. But it can be a 
// premature optimization as well when learning only about React.
//
// Basically that's how props are passed to React components. As you may have noticed, 
// props are only passed from top to bottom in React's component tree. There is no way
// to pass props up to a parent component. We will revisit this issue later in this article. 
// In addition, it's important to know that React's props are read only. There is no way in 
// React to set props (even though it was possible in the past). After all, props are only
// used to pass data from one component to another component React, but only from parent to 
// child components down the component tree.

export default Props;

// eof
