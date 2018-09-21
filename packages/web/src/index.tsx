import ReactDOM from 'react-dom';
import React from 'react';
import  *  as UI from '@ping/ui';

const message = {
  content: "Hi! I'm an other message."
};

ReactDOM.render(<UI.Message message={message}/>, document.querySelector('#app'));
