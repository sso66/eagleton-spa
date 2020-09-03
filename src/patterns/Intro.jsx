// File: Intro.jsx
// Date: 06/30/2020
// Note: React JSX Intro
//..............................................................................
import React from 'react';
import './App.sass'; 

console.log("Mounting App.jsx..." ); 

class Intro extends React.Component {
    render() {
        const helloWorld = 'Welcome to React';
        return (
            <div className="App">
                <h2>{helloWorld}</h2>
            </div>
        )
    }
}

export default Intro;

// eof
