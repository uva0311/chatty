import React, {Component} from 'react';

class ChatBar extends Component {

  render() {
    return (
      // the chatbar template goes here
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={this.props.user}  placeholder="Your name (option)"/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

export default ChatBar;