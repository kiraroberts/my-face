import React from 'react';

function Input(){
  var inputWidth = {
    width: '90%',
    marginLeft: '5%',
    height: '20px'
  };
  return (
    <div>
      <form>
        <input style={inputWidth} type='text' placeholder="What's chirp'n?"/>
      </form>
    </div>
  );
}

export default Input;