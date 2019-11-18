import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

function MessageList(props){
  return (
    <div>
      <hr/>
      { props.masterMessages.map((message, index) => 
        <Message name={message.name} img={message.img} content={message.content} key={index}/>
      )}
    </div>
  );
}

MessageList.propTypes = {
  masterMessages: PropTypes.array
};

export default MessageList;