// File: LoginFormOnSubmit.jsx
// Date: 7/14/2020
// Note: React Module

import React from 'react';

class LoginFormOnSubmit extends React.Component {

    handleSubmit = event => {
        event.preventDefault();
        alert("You user name is : " + this.input.value);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">username</label>
                    <input
                        type="text"
                        name="username"
                        defaultValue="cool-guy"
                        ref={(input) => this.input = input }
                    />
            </form>
        )
    }
}

export default LoginFormOnSubmit;