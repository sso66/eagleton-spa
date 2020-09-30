// File: App.jsx
// Date: 7/29/2020
// Note: React ES6 Component API

import React from 'react';
import { Header, Main } from '../components/Site'

import './App.sass'; 
import logo from './logo.svg';

console.log("Mounting src/App/App.jsx... <App />");

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className="App"> 
                              
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {/* <h2>{this.props.title}</h2> */}
                </div> 

                <p className="App-intro">
                    {/* Welcome to <code>React ES6 Component API</code> */}
                </p>

                <div className="flex-container">
                    <div className="">                       
                        {/* <Header title='Eagleton Web Mobile SPA Design Patterns' /> */}
                        <Main />
                    </div>
                </div>
            </div>
        )
    }
}

// React Component Instance Property
// App.displayName = "UIApplication"

export default App;

// eof
