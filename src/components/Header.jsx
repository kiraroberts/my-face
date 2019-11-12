import React from 'react';
import Button from './Button';
import Search from './Search';

var homeButton = {
  buttonName: 'Home',

};
var notesButton = {
  buttonName: 'Notifications',
 
};
var msgButton = {
  buttonName: 'Messages',
  
};


function Header(){
  var searchStyle = {
    float: 'right',
    padding: '10px'
  };
  var buttonStyle = {
    display: 'inline-block',
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: '1px',
    padding: '8px'
  };
  var buttonPadding = {
    padding: '10px'
  };
  var clearFloat = {
    clear: 'right'
  };
  return (
    <div>
      <div>
        <div style={buttonPadding}>
          <div style={buttonStyle}>
            <Button buttonName={homeButton.buttonName}/>
          </div>
          <div style={buttonStyle}>
            <Button buttonName={notesButton.buttonName}/>
          </div>
          <div style={buttonStyle}>
            <Button buttonName={msgButton.buttonName}/>
          </div>
          <div style={searchStyle}>  
            <Search />
          </div>
        </div>
        
      </div>
      <hr style={clearFloat}/>
    </div>
  );
}

export default Header;