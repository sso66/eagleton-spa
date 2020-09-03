import React, { useRef } from 'react'

function ActionButtonUseRef({ label, action }) {
    const buttonRef = useRef(null)

    return (
      <button onClick={action} ref={buttonRef}>{label}</button>
    )
  }
}

export default ActionButtonUseRef;