import React, {Component} from 'react';

class ChatBar extends Component {

  onKeyPress = (evt) => {
    if(evt.key == 'Enter') {
      evt.preventDefault();
      const messageInput = evt.target.value;
      this.props.addMessage(messageInput);
    }
  }


  render() {
    return (
      // the chatbar template goes here

      <footer className="chatbar">
        <input className="chatbar-username"  placeholder="Your name (option)"/>
        <input className="chatbar-message"  onKeyPress={this.onKeyPress} placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

export default ChatBar;