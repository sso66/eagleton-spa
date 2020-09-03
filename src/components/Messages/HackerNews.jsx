// File: HackerNews1st.jsx
// Date: 7/12/2020
// Note: Component for News aggregator about tech topics/stories

import React from 'react';
import PropTypes from 'prop-types';

import './HackerNews.sass';

console.log("Mounting HackerNews1st.jsx..." ); 

const list = [
    {
        title: 'React',
        url: 'https://Facebook.github.io/react/',
        author: 'Jordan Walker',
        number_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://Facebook.github.io/react/',
        author: 'Dan Abramov, Andre Clark',
        number_comments: 2,
        points: 5,
        objectID: 1,
    },
]

function isSearched(searchTerm) {
    return function(item) {
        // some condition which return true or false
    }
}

class HackerNews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // list: list,  // ES5
            list,   // ES6 Object Initializer,
            searchTerm: '',
        };
        
        this.onDismiss = this.onDismiss.bind(this);    
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onDismiss(id) {
        // function isNotId(item) {
        //     return item.objectID !== id;
        // }
     
        const isNotId = item => item.objectID !== id;
        const updateList = this.state.list.filter(isNotId);
        this.setState({ list: updateList })
    }

    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value });
        // console.log(event.target.value);
    }

    render() {
        const { searchTerm } = this.state;
        return (
            <div className='hacker-news'>        
                <form className='search-form'>
                    <label htmlFor="Search">Search Box </label>
                    <input
                        type='text'
                        value={searchTerm}
                        onChange={this.onSearchChange}
                    />
                </form>  
                
                <div>Search Table</div>
                <div className='search-table'>  
                {
                    // list.map(function(item) {
                    // You are using this.state.list.map(function(item) { ... }), so your 
                    // context is that of a map function. If you change it to 
                    // this.state.list.map(item => { ... }) it will work. 
                    // This is because arrow functions automatically binds to the parents 
                    // this scope. And inside your map function there is no onDismiss function.

                    // When you bind this in a constructor, onDismiss function will receive 
                    // your components context. However, you still must pass your components 
                    // function and in this case you are not doing that.
                    this.state.list.map(item => {
                    // this.state.list.map(function(item) {
                        return (
                            <div key={item.objectID}>
                                <span>
                                    <a href={item.url}>{item.title}</a>
                                </span>
                                <span>{item.author}</span>
                                <span>{item.number_comments}</span>
                                <span>{item.points}</span>

                                <span>
                                    <button
                                        onClick={() => this.onDismiss(item.objectID)}
                                    >
                                        Dismiss
                                    </button>
                                </span>                                
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

HackerNews.propTypes = {
    title: PropTypes.string,
    url: PropTypes.node,
    number_comments: PropTypes.number,
    points: PropTypes.number,
    objectID: PropTypes.number,
}

export default HackerNews;

// eof
