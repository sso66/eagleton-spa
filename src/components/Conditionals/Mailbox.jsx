// File: Mailbox.jx
// Date: 6/27/2020
// Note: Conditional Rendering in React JS
//       Inline If with Logical && Operator 

import React from 'react';

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h2>Hello!</h2>
        {unreadMessages.length > 0 &&
          <h3>
            You have {unreadMessages.length} unread messages.
          </h3>
        }
      </div>
    );
  }
  
 export default Mailbox;

  // eof
