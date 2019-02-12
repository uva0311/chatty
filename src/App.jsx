import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';


class App extends Component {
  render() {
    return (
      <body>
        <ChatBar />
        <Message />
      </body>
    );
  }
}
export default App;
