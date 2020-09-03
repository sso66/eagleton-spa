// File: App.Design.Patterns.jsx
// Note: UI and Service React Components and Applied Design Patterns Catalog
// Date: 7/7/2020
//..............................................................................
import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

import Main from '../components/Main/Main';
import Clock from '../components/Clock/Clock';
import Comment from '../components/Comment/Comment';
import Datasource from '../components/Fetch/Datasource';
import DataLocations from '../components/Fetch/DataLocations';
import FetchAPI from '../components/Fetch/FetchAPI';
import FetchSelfOwnedAPI from '../components/Fetch/FetchSelfOwnedAPI';
import Modal from '../components/Modal/Modal'; 
import VideoReact from '../components/Video/VideoReact';  
import Event from '../components/Events/Event';
import ToggleButton from '../components/Button/ToggleButton';
import LoggingButton from '../components/Button/LoggingButton';
import Greetings from '../components/Forms/Greetings';
import LoginControl from '../components/Forms/LoginControl';
import Mailbox from '../components/Forms/Mailbox';
import Page from '../components/Forms/Page';
import NumberList from '../components/List/NumberList';
import NameForm from '../components/Forms/NameForm';
import EssayForm from '../components/Forms/EssayForm';
import FlavorForm from '../components/Forms/FlavorForm';
import Reservation from '../components/Forms/Reservation';
import Calculator from '../components/Calculator/Calculator';
import Flexbox from '../components/Forms/Flexbox';

import HomeView from '../views/Home/HomeView';
import CalculatorView from '../views/Dashboard/CalculatorView';

import './App.sass'; 

console.log("Mounting App.jsx..." );

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };
    }

    _toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        // mock data source
        const comment = {
            date: new Date(),
            text: 'I hope you enjoy learning React!',
            author: {
                name: 'Hello Kitty',
                avatarUrl: 'https://placekitten.com/g/64/64',
            },
        };    
        const messages = ['React', 'Re: React', 'Re:Re: React', 'Re:Re:Re: React'];
        const numbers = [1, 2, 3, 4, 5];
        const posts = [
            {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
            {id: 2, title: 'Installation', content: 'You can install React from npm.'}
        ];
    
        return (
            <div className="App"> 
                <CalculatorView />
                <Greetings />
                <Flexbox />               
                <Calculator />
                <HomeView />
                <Main />
                <Event />
                <ToggleButton />
                <LoggingButton />  
                
                {/* Try changing to isLoggedIn={true}:
                <Greetings isLoggedIn={true} />
                */}
                
                <LoginControl />    
                <Mailbox unreadMessages={messages} />                
                <Page />
                <NumberList numbers={numbers} />

                <NameForm />
                <EssayForm />
                <FlavorForm />
                <Reservation />

                <Calculator />

                <Comment
                    date={comment.date}
                    text={comment.text}
                    author={comment.author}
                />

                <Clock name="Clock Component" />
                <Clock className />
                <Clock displayName />
                
                <button onClick={this._toggleModal}>
                    Open the modal
                </button>
    
                <Modal 
                    show={this.state.isOpen}
                    onClose={this._toggleModal}
                >
                
                <VideoReact />
                </Modal>
                <Datasource />
                <DataLocations />
                <FetchAPI />
                <FetchSelfOwnedAPI />
            </div>
        );
    }
}

export default App;

// eof
