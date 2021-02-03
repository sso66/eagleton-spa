// File: UIMainScreen.jsx
// Date: 7/29/2020
// Note: Applied CSS Flexbox Module

import React from 'react';
// import PropTypes from 'prop-types';
import './flexbox.sass';

function MainView() {
    return (
        <div className="flex-container">
            <header className="header">Header</header>
            <article className="main">
                <p>Pellentesque habitant morbi tristique senectus et netus et 
                    malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, 
                    ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam 
                    egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend 
                    leo.
                </p>  
            </article>
            <aside className="aside aside-1">Aside 1</aside>
            <aside className="aside aside-2">Aside 2</aside>
            <footer className="footer">Footer</footer>
        </div>
    )
};

MainView.propTypes = {
}

export default MainView;

// eof