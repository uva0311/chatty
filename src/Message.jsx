import React, {Component} from 'react';

class Message extends Component {

  render() {
   return(
    // message template
    <div className="message">
      <span className="message-username">{this.props.messageUser}</span>
      <span className="message-content">{this.props.messageContent}</span>
    </div>
   );
  }
}

export default Message;