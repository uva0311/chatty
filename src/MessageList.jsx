import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {


  render() {

    const messageList = this.props.messages.map((message) =>
      (message.type === 'incomingMessage')? (
          <Message key={message.id}
                   userColor={message.userColor} // props from app.jsx
                   messageUser={message.username}
                   messageContent={message.content} />

        ) : (
          <div className="message system">
              {message.content}
          </div>
        )
    );

    return(
      <main className="messages">
        { messageList }
      </main>
    );
  }
}

export default MessageList;