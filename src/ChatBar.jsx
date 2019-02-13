import React, {Component} from 'react';

class ChatBar extends Component {

  onKeyPress = (evt) => {
    if(evt.key == 'Enter') {
      evt.preventDefault();
      const messageInput = evt.target.value;
      this.props.addMessage(messageInput);
    }
  }

  handleChange = (evt) => {
    const usernameInput = evt.target.value;
    this.props.changeUserName(usernameInput);
  }

  render() {
    return (
      // the chatbar template goes here

      <footer className="chatbar">
        <input className="chatbar-username"
               value={this.props.username}
               onChange={this.handleChange}
               placeholder="Your name (option)"/>
        <input className="chatbar-message"  onKeyPress={this.onKeyPress} placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

export default ChatBar;