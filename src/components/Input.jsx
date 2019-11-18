import React from 'react';
import PropTypes from 'prop-types';

function Input(props){
  let _input = null;

  function handleNewChirpMessage(event){
    event.preventDefault();
    props.onNewChirpMessageCreation({input: _input.value});
    _input.value = '';
  }

  var inputWidth = {
    width: '80%',
    marginLeft: '5%',
    height: '20px'
  };
  return (
    <div>
      <form onSubmit={handleNewChirpMessage}>
        <input style={inputWidth} type='text' placeholder="What's chirp'n?" ref={(input) => { _input = input }}/>
        <button type='submit'>Chirp It!</button>
      </form>
    </div>
  );
}

Input.propTypes = {
  onNewChirpMessageCreation: PropTypes.func
};

export default Input;