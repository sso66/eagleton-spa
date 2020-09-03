// File: Welcome.jsx
// Date: 6/8/2020
// Note: ReactJSX ES6 Module Definition

import React from 'react';
import PropTypes from 'prop-types';

import './Welcome.sass';

function WelcomeFC(props) {
    const { firstName, lastName, age } = props;
    return <div className="welcome">Hello, {firstName} {lastName} {age}</div>;
}

function WelcomePass({firstName, lastName, age}) {
    return <div className="welcome">Hello, {firstName} {lastName}{age}</div>;
}

class Welcome extends React.Component {
    render() {
        const { firstName, lastName, age } = this.props;
        return <div className="welcome">Hello, {firstName} {lastName} {age}</div>;
    }
}

const WelcomeArrow = (props) =>
    <div className="welcome">Hello, {props.firstName} {props.lastName} {props.age}</div>;

const WelcomeArrowPass = ({firstName, lastName, age}) =>
    <div className="welcome">Hello, {firstName} {lastName} {age}</div>;

Welcome.propTypes = {
    age: PropTypes.string
}

WelcomeArrowPass.defaultProps = {
    firstName: 'John',
    lastName: 'Lennon'
}

export { 
    WelcomeFC, 
    WelcomePass,
    Welcome,
    WelcomeArrow,
    WelcomeArrowPass
};

// eof
