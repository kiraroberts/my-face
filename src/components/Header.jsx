import React from 'react';
import Button from './Button';
import Search from './Search';

var homeButton = {
  buttonName: 'Home'
};
var notesButton = {
  buttonName: 'Notifications'
};
var msgButton = {
  buttonName: 'Messages'
};


function Header(){
  var searchStyle = {
    float: 'right'
  };

  return (
    <div>
      <div>
        <Button buttonName={homeButton.buttonName}/>
        <Button buttonName={notesButton.buttonName}/>
        <Button buttonName={msgButton.buttonName}/>
        <div style={searchStyle}>  
          <Search />
        </div>
      </div>

    </div>
  );
}

export default Header;