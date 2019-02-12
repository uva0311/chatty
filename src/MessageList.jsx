import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {



  render() {

    const messageList = this.props.messages.map((message) =>
      <Message key={message.id}
               messageUser={message.username}
               messageContent={message.content} />
    );

    return(
      <main className="messages">
        { messageList }
        <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div>
      </main>
    );
  }
}

export default MessageList;