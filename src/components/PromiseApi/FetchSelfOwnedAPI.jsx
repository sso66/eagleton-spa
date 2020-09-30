// File: FetchSelfOwnedAPI.sass
// Date: 6/25/2020
// Note: Using Fetch With Self-Owned API

import React from 'react';
import './FetchSelfOwnedAPI.sass';

class FetchSelfOwnedAPI extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoading: true,
            posts: [],
            // error: null,
        };        
    }
    
    componentDidMount() {
        this._fetchPosts();
    }

    _fetchPosts() {
        fetch(`https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json`)
            .then(response => response.json())
            .then(
                data =>
                    this.setState({
                        posts: data,
                        isLoading: false,
                    })
                )
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        // const { isLoading, posts, error } = this.state; // list comprehension
        const { isLoading, posts } = this.state; // list comprehension     
          
        return (
            <React.Fragment>
                <div className="fetch-self-owned-api">
                    <h2>React Fetch Self-Owned - Blog</h2>
                    <hr />
                    {!isLoading ? Object.keys(posts)
                        .map(key => <Post key={key} body={posts[key]} />) : <h3>Loading...</h3>}
                </div>
            </React.Fragment>
        );
    }
}

const Post = ({ body }) => {
    return (
        <div>
            {body.map(post => {
                const { _id, title, content } = post;
                
                return (
                    <div key={_id}>
                        <h3>{title}</h3>
                        <p>{content}</p>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};

export default FetchSelfOwnedAPI;

// eof
