import React from 'react';
import Header from './Header';
import Profile from './ProfileWrap';
import Contact from './ContactWrap';
import Message from './MessageWrap';

function App() {

  var masterContactList = [
    {
      name: 'Andy',
      image: 'https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg'
    },
    {
      name: 'Dorothy',
      image: 'https://c8.alamy.com/comp/EAKDHA/portrait-of-a-little-girl-with-hat-posing-as-a-gangster-EAKDHA.jpg'
    },
    {
      name: 'Gertrude',
      image: 'https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg'
    }
  ];

  let friendsListArray = [];
  const username = 'Georgina Marveloso';
  const profImage = 'https://s.blogcdn.com/slideshows/images/slides/357/674/1/S3576741/slug/l/katehudson-2.jpg';
  
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
              <Profile name={username} profImage={profImage} friendsList={friendsListArray}/>
            </td>
            <td style={Object.assign(msgWidthStyle, align)}>
              <Message name={username} img={profImage}/>
            </td>
            <td style={Object.assign(contactWidthStyle, align)}>
              <Contact contactList={masterContactList}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  );

}

export default App;