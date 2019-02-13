import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  constructor() {
    super();
    // set initial state
    this.state = {
      currentuser: { name: "Bob"},
      messages: []
    }

    this.addMessage = this.addMessage.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
  }

  // add input message to the stored message data
  addMessage(msg) {
    const newMessage = {
      'id': '',
      'type': 'sendMessage',
      'content': msg,
      'username': this.state.currentuser
    }

    this.socket.send(JSON.stringify(newMessage));
  }

  changeUserName(username) {
    this.setState({
      currentuser: { name: username }
    });
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');

    // event listener is fired when the socket is connected
    this.socket.onopen = (evt) => {
      console.log('connected to server');
    };

    // event listener is fired whenever the socket receives a message from the server
    // evt is a MessageEvent which contains the message from the server along with some metadata

    this.socket.onmessage = (event) => {
      console.log('Got message from server', event);

      // handle incoming messages
      const msg = JSON.parse(event.data);

      this.setState({
        messages: [...this.state.messages, msg]
      });


    }

    this.socket.onclose = () => {
      console.log('Disconnected from the WebSocket');
    };

  }

  render() {
    return (
      <div>
        <ChatBar user={this.props.username} addMessage={this.addMessage}/>
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}
export default App;
