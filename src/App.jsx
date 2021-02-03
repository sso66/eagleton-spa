// File: App.jsx
// Date: 7/29/2020
// Note: React ES6 Component API

import React from 'react';

import { 
    Header, 
    Main 
} from './components/Site'

import './App.sass'; 
import logo from './logo.svg';

function App() {
    return (
        <div className="App">                      
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

            </header> 
            <main className="">   
                <Header />                       
                <Main />
            </main>
        </div>
    )
};

// React Component Instance Property
App.displayName = "Eagleton SPA"

export default App;

// eof