
// File: FetchAPI.jsx
// Date: 7/9/2020
// Note: Using remote data in React with the Axios API

import React from 'react';
import axios from 'axios';

import './AxiosAPI.sass';

const DEFAULT_QUERY = 20;
const PATH_BASE = 'https://randomuser.me/api/';
const PARAM_SEARCH = 'query='

class AxiosAPI extends React.Component {
    state = {
        users: [],
        isLoading: true,
        errors: null
    };
  
    _getUsers() {
        axios
            .get("https://randomuser.me/api/?results=5")
            // .get(`${PATH_BASE}?${PARAM_SEARCH}${DEFAULT_QUERY}`)
            .then(response =>
                response.data.results.map(user => ({
                    name: `${user.name.first} ${user.name.last}`,
                    username: `${user.login.username}`,
                    email: `${user.email}`,
                    image: `${user.picture.thumbnail}`
                }))
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
            });
        })
        .catch(error => this.setState({ error, isLoading: false }));
    }
  
    componentDidMount() {
        this._getUsers();
    }
  
    render() {
        const { isLoading, users } = this.state;
        return (
            <React.Fragment>
                <h2>JSONPlaceholder Platform::AxiosAPI: Users</h2>
                <div>
                    {!isLoading ? (
                        users.map(user => {
                            const { username, name, email, image } = user;
                            return (
                                <div key={username} className="axios-api">
                                    <p>{name}</p>
                                    <div>
                                        <img src={image} alt={name} />
                                    </div>
                                    <p>{email}</p>
                                    <hr />
                                </div>
                            );
                        })
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </React.Fragment>
        );
    }
}
  
export default AxiosAPI;
  
  // eof
