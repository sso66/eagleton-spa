// File: Main.jsx
// Date: 7/10/2020
// Note: React ES6 Component API

import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import { HomeView } from '../../views/Home';
import Roster from '../../views/Products/Roster';
import Schedule from '../../views/Products/Schedule';

// import './Site.sass';

console.log("Mounting src/components/Site/Main.jsx...");

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
      <main>
      {/* <div className="main"> */}
         {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route path="/" exact component={HomeView} />
          {/* <Route path="/roster" component={Roster} /> */}
          {/* <Route path="/schedule" component={Schedule} /> */}
        </Switch>
      {/* </div> */}
      </main>
  );
}

// eof
