// File: Header.jsx
// Date: 7/10/2020
// Note: React ES6 Component API

import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import NavBar from './NavBar';
// import './Site.sass';

const Header = (props) => (
  <header>
    <h1>{props.title}</h1>
    <NavBar {...props} />
  </header>
)

Header.propTypes = {
  title: PropTypes.string
}

export default Header

// eof