// File: Roster.jsx
// Date: 7/10/2020
// Note: Use cases for react-router-dom service package
import React from 'react'
import { 
    BrowserRouter as Router,
    Switch, 
    Route
} from 'react-router-dom'

import FullRoster from './FullRoster'
import Player from './Player'

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Router>
    <Switch>
      <Route exact path='/roster' component={FullRoster}/>
      <Route path='/roster/:number' component={Player}/>
    </Switch>
  </Router>
)


export default Roster

// eof
