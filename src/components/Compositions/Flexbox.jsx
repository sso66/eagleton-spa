// File: Flexbox.jsx
// Date: 7/22/2020
// Note: React Containment: Flexbox Module usecase

import React from 'react';
import './Flexbox.sass';

console.log("Flexbox...")
function Contacts() {
    return <div className="Contacts">Contacts</div>;
  }
  
  function Chat() {
    return <div className="Chat">Chat</div>;
  }
  
  function SplitPane(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
    );
  }
  
  function Flexbox() {
    return (
      <SplitPane
        left={ <Contacts /> }
        right={ <Chat /> } 
      />
    );
  }
 
  export default Flexbox;

  // eof
