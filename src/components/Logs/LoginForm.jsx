// File: LoginForm.jsx
// Date: 7/14/2020
// Note: React Module

import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
        // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange() {
    // }

    // handleChange = event => {
    //     this.setState({ username: event.target.value })
    // };

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };


    render() {
        const { username, password } = this.state;

        return (
            <React.Fragment>
                <form>
                    <label htmlFor="username">username</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                </form>

                <h3>Username: {username}</h3>
            </React.Fragment>
        )
    }
}

export default LoginForm;

// eof
