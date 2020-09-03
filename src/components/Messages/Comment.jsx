// File: Comment.jsx
// Date: 6/25/2020
// Note: Components and Props

import React from 'react';
import './Comment.sass'

console.log("Mounting Comment.jsx..." );

function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <img
            className="avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
  return (
        <div className="user-info">
            <Avatar user={props.user} />
            <div className="user-info-name">{props.user.name}</div>
        </div>
    );
}

function Comment(props) {
  return (
        <div className="comment">
            <UserInfo user={props.author} />
            <div className="comment-text">{props.text}</div>
            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

export default Comment;

// eof
