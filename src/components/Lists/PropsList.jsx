// File: PropsList.jsx
// Date: 6/26/2020
// Note: List and Keys - Keys Must Only Be Unique Among Siblings

import React from 'react';

function PropsList(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );

    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );

    return (
      <div>
        <h2>Layout</h2>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }

export default PropsList;

// eof