// File: FullRoster.jsx
// Date: 7/10/2020
// Note: Use cases for react-router-dom service package

import React from 'react'
import { Link } from 'react-router-dom'

import PlayerAPI from '../../data/players';
import './Roster.sass';

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullRoster = () => (
  <div className='roster'>
    <h2>Roster List View</h2>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullRoster

// eof
