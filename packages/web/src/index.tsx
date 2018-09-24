import ReactDOM from 'react-dom';
import * as React from 'react';
import * as PingUIModel from '@ping/ui-model';
import * as PingUI from '@ping/ui-html';

const convo: Array<PingUIModel.Message> = [
  {content: "I'm the first message!"},
  {content: "Hi! I'm an other message."},
  {content: "This is a really long message, mainly pertaining to messages themselves. It exists to ensure that wrapping occurrs properly in the message display component."}
]

ReactDOM.render(<PingUI.Conversation messages={convo}/>, document.querySelector('#app'));
