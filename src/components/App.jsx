import React from 'react';
import Header from './Header';
import Profile from './ProfileWrap';
import Contact from './ContactWrap';
import Message from './MessageWrap';

function App(){
  return(
    <div>
      <div>
        <Header/>
      </div>
      <table>
        <tr>
          <td>
            <Profile/>
          </td>
          <td>
            <Message/>
          </td>
          <td>
            <Contact/>
          </td>
        </tr>
      </table>
    </div>

  );

}

export default App;