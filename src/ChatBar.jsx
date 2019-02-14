import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);

  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const messageUsername = evt.target.elements["chatbar-username"].value;
    const messageInput = evt.target.elements["chatbar-message"].value;
    this.props.addMessage(messageUsername, messageInput);
  }

  // handleMessage = (evt) => {
  //   if(evt.key == 'Enter') {
  //     const messageInput = evt.target.value;
  //     this.props.addMessage(messageInput);
  //     if (this.props.username != )
  //   }
  // }

  // handleUserNameChange = (evt) => {
  //   const usernameInput = evt.target.value;
  //   this.props.changeUserName(usernameInput);
  // }

  handleNotice = (evt) => {
    if(evt.key == 'Enter' && evt.target.value !== '') {
      this.props.addNotification(evt.target.value);
    }
  }

  render() {
    return (
      // the chatbar template goes here
      <footer className="chatbar">
        <form onSubmit={this.handleSubmit}>
          <input className="chatbar-username"
                 type="text"
                 name="chatbar-username"
                 defaultValue={this.props.username}
                 placeholder="Your name (option)"/>
          <input className="chatbar-message"
                 type="text"
                 name="chatbar-message"
                 placeholder="Type a message and hit ENTER"/>
          <input type="submit"
                 style={{display: "none"}}/>
        </form>
      </footer>
    );
  }
}

export default ChatBar;