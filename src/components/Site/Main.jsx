// File: Main.jsx
// Date: 7/10/2020
// Note: React ES6 Component API
import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import Home from '../../views/Home';
import Roster from '../../views/Roster';
import Schedule from '../../views/Schedule';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function Main() {
  return (
      <div className="main">              
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/roster" component={Roster} />
          <Route path="/schedule" component={Schedule} />
        </Switch>
      </div>
  );
}

// eof
