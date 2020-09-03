// File: Greeting.jsx
// Date: 6/27/2020
// Note: Conditional Rendering in React JS

import React from 'react';
import './Greetings.sass';

// Supporting code
function UserGreeting(props) {
    return <h2 className="greeting">Welcome back!</h2>;
}
  
function GuestGreeting(props) {
    return <h2>Please sign up.</h2>;
}

// Core and Architecture
function Greetings(props) {
    // property binding via Prototype Design Pattern - props.isLoggedIn
    // if Greeting is class component: this.props.isLoggedIn is used.
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
}

export default Greetings;

  // eof
