// File: index.jsx
// Date: 7/10/2020
// Note: Main entry point to React Component API

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App'

// import './styles/_reset.sass';     
import './index.sass';  
// import './styles/_bulma.sass';  
// import './styles/_animations.sass';

console.log("Mounting src/index.jsx... <index />");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App title='Thinking in React' />
    </Router>
  </React.StrictMode>,
      document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// ___ Hot Module Reloading (HMR) enabled ___
if (module.hot) {
    module.hot.accept()
}

// eof
