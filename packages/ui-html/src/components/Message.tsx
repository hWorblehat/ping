import * as React from 'react';
import './style.css'

import { Message  as MessageModel } from '@ping/ui-model';

export const Message = ({message}: {message: MessageModel}) => {
  return (
    <div className="ping-message">
      {message.content}
    </div>
  );
}
