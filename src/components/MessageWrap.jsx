import React from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import Input from './Input';

class MessageWrap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterMessageList: [
        {
          name: 'Bolario',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwBvTtnjYH3z5L-QQQ0aUFvAbb1q6p28SEuRxbbjtPhiFG29uUg&s',
          content: 'Beards in animals: The term "beard" is also used for a collection of stiff, hairlike feathers on the centre of the breast of turkeys. Normally, the turkey\'s beard remains flat and may be hidden under other feathers, but when the bird is displaying, the beard becomes erect and protrudes several centimetres from the breast.'
        },
        {
          name: 'Wendy',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7NeAaCieKqFS7aARL8dd8zJ3DtCqZUAIx4mtB5A2D0SYMcV2&s',
          content: 'Have you heard? Single Baconator is one quarter-pound patty topped with mayonnaise, ketchup, three strips of bacon, and two slices of cheese; Double Baconator has mayonnaise, ketchup, six strips of bacon, two quarter-pound (113.4 gram) patties, and three slices of American cheese; and the Triple Baconator (1360 calories) is three quarter-pound patties with nine strips of bacon, four slices of cheese, ketchup, and mayonnaise. (Promoted)'
        },
        {
          name: 'Daenerys Targaryen',
          img: 'https://www.chandlermacleod.com/blog/wp-content/uploads/2019/08/Toxic-Leadership-Triangle-1170x781.png',
          content: 'One of the most iconic modern dragons is Smaug from J. R. R. Tolkien\'s classic novel The Hobbit.[158] Dragons also appear in the bestselling Harry Potter series of children\'s novels by J. K. Rowling.[7] Other prominent works depicting dragons include Anne McCaffrey\'s Dragonriders of Pern, Ursula K. Le Guin\'s Earthsea Cycle, George R. R. Martin\'s series A Song of Ice and Fire, and Christopher Paolini\'s Inheritance Cycle. Sandra Martina Schwab writes, "With a few exceptions, including McCaffrey\'s Pern novels and the 2002 film Reign of Fire, dragons seem to fit more into the medievalized setting of fantasy literature than into the more technological world of science fiction. Indeed, they have been called the emblem of fantasy. The hero\'s fight against the dragon emphasizes and celebrates his masculinity, whereas revisionist fantasies of dragons and dragon-slaying often undermine traditional gender roles. In children\'s literature the friendly dragon becomes a powerful ally in battling the child\'s fears."[162] The popular role playing game system Dungeons & Dragons (D&D) makes heavy use of dragons.'
        }
      ]
    };
    this.handleNewChirpMessageCreation = this.handleNewChirpMessageCreation.bind(this);
  }

  handleNewChirpMessageCreation(newMessage) {
    var newMasterMessageList = [];
    newMasterMessageList.push({name: this.props.name, img: this.props.img, content: newMessage.input});
    var currentMasterList = this.state.masterMessageList.slice();
    newMasterMessageList = newMasterMessageList.concat(currentMasterList);
    this.setState({ masterMessageList: newMasterMessageList });
  }

  render(){
    return (
      <div>
        <Input onNewChirpMessageCreation={this.handleNewChirpMessageCreation} />
        <MessageList masterMessages={this.state.masterMessageList}/>
      </div>
    );
  }
}

MessageWrap.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string
};

export default MessageWrap;