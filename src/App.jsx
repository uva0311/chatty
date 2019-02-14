import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  constructor() {
    super();
    // set initial state
    this.state = {
      currentuser: {name: 'Anonymous'},
      messages: []
    }

    this.addMessage = this.addMessage.bind(this);
    // this.changeUserName = this.changeUserName.bind(this);
    this.addNotification = this.addNotification.bind(this);
  }

  // add input message and send the messaged posted to the server
  addMessage(username, msg) {
    if (username != this.state.currentuser.name) {
      this.addNotification(username)
    }

    const newMessage = {
      id: '',
      type: 'postMessage',
      content: msg,
      username: username
    }

    this.socket.send(JSON.stringify(newMessage));
  }

  // changeUserName(Newname) {
  //   this.setState({

  //   });
  // }

  addNotification(newName) {
    const newNotification = {
      type: 'postNotification',
      content: `${this.state.currentuser.name} has changed their name to ${newName}`
    }

    this.setState({
      currentuser: {name: newName}
    });

    this.socket.send(JSON.stringify(newNotification));
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
      switch(msg.type) {
        case 'incomingMessage':
          // handle incoming message
          this.setState({
            messages: [...this.state.messages, msg]
          });
          break;
        case 'incomingNotification':
          // handle incomnig notification
          this.setState({
            messages: [...this.state.messages, msg]
          });
          console.log(this.state.messages);
          break;
        default:
          // show an error in the console if the message type is unknown
          throw new Error("Unknown event type " + data.type);
      }

    }

    this.socket.onclose = () => {
      console.log('Disconnected from the WebSocket');
    };

  }

  render() {
    return (
      <div>
        <ChatBar username={this.state.currentuser.name}
                 addMessage={this.addMessage}
                 addNotification={this.addNotification}/>
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}
export default App;
