import React from 'react'
import { Alert } from 'react-bootstrap'

function Message({ variant, children }) {
    return (
      <Alert className="py-2 my-2" variant={variant}>
        {children}
      </Alert>
    );
}

export default Message
