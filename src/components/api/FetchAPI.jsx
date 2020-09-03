// File: FetchAPI.jsx
// Date: 6/25/2020
// Note: Using remote data in React with the Fetch API

import React from 'react';
import './FetchAPI.sass';

console.log("Mounting FetchAPI.jsx... <FetchAPI />");

// const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_BASE = `https://jsonplaceholder.typicode.com/users`;


class FetchAPI extends React.Component {
    constructor(props){
        super(props)
   
        this.state = {
            isLoading: true,
            users: [],
            error: null
        };
    }
    
    _fetchUsers() {
        // fetch(`https://jsonplaceholder.typicode.com/users`)
        fetch(`${PATH_BASE}`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    users: data,
                    isLoading: false,
                })
            )
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this._fetchUsers();
    }
  
    render() {
        const { isLoading, users, error } = this.state;
        
        return (
            <React.Fragment>
                <h2>JSONPlaceholder Platform::FetchAPI: Users</h2>
                {error ? <p>{error.message}</p> : null}
                {!isLoading ? (
                    users.map(user => {
                        const { id, username, name, email } = user;
                        return (
                            <div key={username} className="fetch-api">
                                <p>Name: {name}</p>
                                <p>Email Address: {email}</p>
                                <hr />
                            </div>
                        );
                    })
                ) : (
                    <h3>Loading...</h3>
                )}
            </React.Fragment>
        );
    }
}

export default FetchAPI;

// eof