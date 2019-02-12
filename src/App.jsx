import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  constructor() {
    super();
    // set initial state
    this.state = {
      currentuser: { name: "Bob"},
      messages: [
        {
          id: 1,
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 2,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    }

    this.addMessage = this.addMessage.bind(this);
  }

  // add input message to the stored message data
  addMessage(text) {
    const newMessage = {
      id: this.state.messages.length + 1,
      username: this.state.currentuser.name,
      content: text
    }

    const messages = [...this.state.messages, newMessage];

    this.setState({messages: messages});
  }

  render() {
    return (
      <div>
        <ChatBar user={this.state.currentuser.name} addMessage={this.addMessage}/>
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}
export default App;
