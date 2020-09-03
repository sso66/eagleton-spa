// File: ErrorBoundary.jsx
// Date: 7/19/2020
// Note: Understanding React Error Handling

import React from 'react';
import './App.sass'; 

console.log("Mounting ErrorBoundary.jsx..." ); 


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            hasError: false,
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };       
    }

    componentDidCatch(error, info) {
        // logErrorToMyService(error, info);
    }

    logErrorToMyService(error, info) {
        return () => `${error}: ${info}`
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong!</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

// eof 
