// File: WelcomeDialog.jsx
// Date: 7/15/2020
// Note: React Containment: CSS Box usecase
//..............................................................................
import React from 'react';
import './WelcomeDialog.sass';

function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

  export default function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome Dialog
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }