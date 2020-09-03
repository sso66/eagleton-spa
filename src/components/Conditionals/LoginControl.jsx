// File: LoginControl.jsx
// Date: 6/27/2020
// Note: Conditional rendering in React JS - Element Variables

import React from 'react';
import Greetings from '../Forms/Greetings';

// Core and Architecture
class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {isLoggedIn: false};

      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button;
        if (isLoggedIn) {
          button = <LogoutButton onClick={this.handleLogoutClick} />;
       } else {
          button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <hr />
          The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
          <Greetings isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }

// Supporting code
export function LoginButton(props) {
  // event binding via Prototype Design Pattern - props.onClick
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}
  
export function LogoutButton(props) { // event binding via Prototype Design Pattern - onClick
 // event binding via Prototype Design Pattern - props.onClick
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

export default LoginControl;

// eof
