import React from 'react';
import MessageList from './MessageList';
import Input from './Input';

function MessageWrap(){
  return (
    <div>
      <Input/>
      <MessageList />
    </div>
  );
}

export default MessageWrap;