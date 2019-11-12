import React from 'react';
import Header from './Header';
import Profile from './ProfileWrap';
import Contact from './ContactWrap';
import Message from './MessageWrap';

function App(){
  var msgWidthStyle = {
    width: '40%'
  };
  var contactWidthStyle = {
    width: '15%',
    backgroundColor: '#aae6f0'
  };
  var align = {
    verticalAlign: 'top',
    padding: '10px'
  };
  var bgColor = {
    backgroundColor: '#d0f0f5',
    height: '1600px'
  };
  return(
    <div style={bgColor}>
      <div>
        <Header/>
      </div>
      <table>
        <tbody>
          <tr>
            <td style={align}>
              <Profile/>
            </td>
            <td style={Object.assign(msgWidthStyle, align)}>
              <Message/>
            </td>
            <td style={Object.assign(contactWidthStyle, align)}>
              <Contact/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  );

}

export default App;