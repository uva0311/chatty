import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      message: ""
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const messageUsername = this.state.username;
    const messageInput = this.state.message;

    if (messageInput) {
      this.props.addMessage(messageUsername, messageInput);
      this.setState({message: ""})
    } else if (this.props.username != this.state.username) {
      this.props.addNotification(this.state.username)
    }

  }

  handleUsername = (evt) => {
    this.setState({username: evt.target.value})
  }

  handleMessage = (evt) => {
    if(evt.key == 'Enter') {
      const messageInput = evt.target.value;
      this.props.addMessage(messageInput);
    } else {
      this.setState({message: evt.target.value})
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
                 value={this.state.username}
                 onChange={this.handleUsername}
                 placeholder="Your name (option)"/>
          <input className="chatbar-message"
                 type="text"
                 name="chatbar-message"
                 value={this.state.message}
                 onChange={this.handleMessage}
                 placeholder="Type a message and hit ENTER"/>
          <input type="submit"
                 style={{display: "none"}}/>
        </form>
      </footer>
    );
  }
}

export default ChatBar;