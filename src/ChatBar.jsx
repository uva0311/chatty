import React, {Component} from 'react';

class ChatBar extends Component {
  // constructor() {
  //   // will modify later
  // }

  render() {
    return (
      // the chatbar template goes here
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}
export default ChatBar;