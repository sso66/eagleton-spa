// File: HackerNews3rd.jsx
// Date: 7/12/2020
// Note: Component for News aggregator about tech topics/stories

import React from 'react';
import logo from './logo.svg';

// import {
//     DEFAULT_QUERY,
//     DEFAULT_PAGE,
//     DEFAULT_HPP,

//     PATH_BASE,
//     PATH_SEARCH,
//     PARAM_SEARCH,
//     PARAM_PAGE,
//     PARAM_HPP
// } from '../constants';

// import {
//     GenericButton,
//     LoggingButton,
//     ToggleButton
// } from '../components/Buttons'

console.log("Mounting AppHackerNews.jsx..." ); 

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
// Fetching Data
const DEFAULT_QUERY = 'redux';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = '/query=';

const url = `${PATH_BASE}${PATH_SEARCH}${PARAM_SEARCH}${DEFAULT_QUERY}`


class HackerNews3rd extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list: list,
            searchTerm: '',
            result: null,
            // searchTerm: DEFAULT_QUERY,
        };

        this.onDismiss = this.onDismiss.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this);

        this.setSearchTopstories = this.setState.bind(this);
        this.fetchSerchTopstories = this.fetchSerchTopstories.bind(this);
    }

    onDismiss(id) {
        const isNotId = item => item.objectID !== id;
        const updatedList = this.state.list.filter(isNotId);
        this.setState({ list: updatedList })
    }

    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    setSearchTopstories(result) {
        this.setState({ result });
    }

    fetchSerchTopstories(searchTerm) {
        console.log("url: " + url)
        // fetch(`${PATH_BASE}${PATH_SEARCH}${PARAM_SEARCH}${DEFAULT_QUERY}`)
        fetch(url)
            .then(response => response.json())
            .then(result => this.setSearchTopstories(result));
    }

    componentDidMount() {
        const { searchTerm } = this.state;
        this.fetchSerchTopstories(searchTerm);
    }

    render() {
        const hackernews = 'Hacker News App';
        const { list, searchTerm } = this.state;
        console.log("this.state: " + this.state.list);

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>{hackernews}</h2>
                </div> 
                <p className="App-intro">
                    Welcome to <code>a great news aggregator about tech topics...</code>
                </p>
                <div className="page">
                    {/* <Search /> */}
                    <form>
                        <input 
                            type="text" 
                            value={searchTerm}
                            onChange={this.onSearchChange}
                        />
                    </form>

                    {/* <Table /> */}
                    { list.filter(isSearched(searchTerm)).map(item =>
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
                                    type="button"
                                >
                                    Dismiss
                                </button>
                            </span>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

// Higher Order Component (Function)
function isSearched(searchTerm) {
    return function(item) {
        return !searchTerm ||
            item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
}
// Functional Stateless Component
// function SearchFSC(props) {
//     const {value, onChange, children } = props;
// function SearchFSC({ value, onChange, children }) {
const SearchFSC = ({ value, onChange, children }) =>

    // return (
        <form>
            {children} <input
                type="text"
                value={value}
                onChange={onChange}
            />
        </form>
    // )
// }

class Search extends React.Component {   
    render() { 
        const { value, onChange, children } = this.props;

        return (
            <form>
                {children}<input 
                    type="text" 
                    value={value}
                    onChange={this.onSearchChange}
                />
            </form>
        )
    }
}

class Table extends React.Component {
    render() {
        const { list, pattern, onDismiss } = this.props;

        return (
        <div>
            { list.filter(isSearched(pattern)).map(item =>
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
                            type="button"
                        >
                            Dismiss
                        </button>
                    </span>
                </div>
            )}
        </div>
        )
    }
}


export default HackerNews3rd;

// eof
