// File: PageListLayout.jsx
// Date: 7/23/2020
// Note: Applied CSS Flexbox Module

import React from 'react';
import './PageListLayout.sass';

class PageListLayout extends React.Component {

    render() {

        return (
            <div className="wrapper">
                <header className="header">Header</header>
                <main className="main">
                    <code>Main</code>
                    <p>Pellentesque habitant morbi tristique senectus et netus et 
                        malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, 
                        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam 
                        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend 
                        leo.
                    </p>  
                </main>
                <aside className="aside aside-1">Aside 1</aside>
                <aside className="aside aside-2">Aside 2</aside>
                <footer className="footer">Footer</footer>
            </div>
        )
    }
}

PageListLayout.propTypes = {

}

export default PageListLayout;

// eof
