import React, {Component} from 'react';

class ChatBar extends Component {

  onKeyPress = (evt) => {
    console.log("key", evt.key);
    if(evt.key == 'Enter') {
      evt.preventDefault();
      const messageInput = evt.target.value;
      this.props.addMessage(messageInput);
      // messageInput.value = "";
    }
  }

  render() {
    return (
      // the chatbar template goes here

      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={this.props.user}  placeholder="Your name (option)"/>
        <input className="chatbar-message" name="messageContent" onKeyPress={this.onKeyPress} placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

export default ChatBar;