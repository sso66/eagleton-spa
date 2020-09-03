// File: App.jsx
// Date: 7/8/2020
// Note: Hacker News App: News aggregator about tech topics/stories
//..............................................................................
import React from 'react';

import './HackerNewsApp.sass'; 
import logo from './logo.svg';

import Header from '../components/Site/Header/Header';
import Main from '../components/Site/Main';

import {
    Welcome,
    WelcomeArrowPass,
    WelcomeFC
} from '../components/Welcome'

import Comment from '../components/Blog';
import FetchAPI from '../components/Fetch/FetchAPI'
import AxiosAPI from '../components/Fetch/AxiosAPI';
import Clock from '../components/Timer/Clock';

console.log("Mounting App.jsx..." ); 

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
};


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
   }

    render() {
        const hackernews = 'Hacker News App';
        return (
            <div className="App">
                
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>{hackernews}</h2>
                </div> 
                <p className="App-intro">
                    Welcome to <code>great News aggregator about Tech topics...</code>
                </p>
                
                <div className="page">
                    <div className="interactions">
                        {/*
                        <Header />
                        <Main />
                        */}
                        <Clock name="Mr. Clock" />
                        <Welcome 
                            firstName="Ringo"
                            lastName="Starr" 
                            age="80"
                        />
                        
                        <Welcome 
                            firstName="George"
                            lastName="Harrison" 
                            age=""
                        />

                        <Welcome 
                            firstName="Paul"
                            lastName="Mac Cartney" 
                            age="78"
                        />
                        
                        <WelcomeArrowPass />

                        <Comment 
                            date={comment.date}
                            text={comment.text}
                            author={comment.author}
                        />
                        <FetchAPI />
                        <AxiosAPI />
                   </div>

                </div>
            </div>
        )
    }
}

export default App;

// eof
