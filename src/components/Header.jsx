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
    padding: '8px'
  };
  var buttonPadding = {
    padding: '10px',
    float: 'left'
  };
  var clearFloat = {
    clear: 'right'
  };
  var header = {
    display: 'inline-block',
    verticalAlign: 'middle',
    clear: 'left',
    margin: '0'
  }
  var centerText = {
    textAlign: 'center'
  }
  var lessMargin = {
    margin: '0'
  }

  return (
    <div style={centerText}>
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
        </div>

        <div style={header}>
          <h1 style={lessMargin}>
            My Face!
          </h1>
        </div>

        <div style={searchStyle}>  
          <Search />
        </div>
      </div>
      <hr style={clearFloat}/>
    </div>
  );
}

export default Header;