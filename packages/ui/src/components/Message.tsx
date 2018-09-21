import * as React from 'react';
import './style.css'

export const Message = ({message}: {message: {content: string}}) => {
  return (
    <div className="ping-message">
      {message.content}
    </div>
  );
}

//TODO PropTypes
