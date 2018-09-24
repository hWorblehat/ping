import * as React from 'react';
import './style.css';

import { Message  as MessageModel } from '@ping/ui-model';

import { Message } from './Message';


export const Conversation = ({messages}: {messages: Array<MessageModel>}) => {
  const convo = messages.map((msg: MessageModel, index: number) => { return (
    <div key={index}>
      <Message message={msg}/>
    </div>
  );});

  return (
    <div className="ping-conversation">
      {convo}
    </div>
  );
}
