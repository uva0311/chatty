import React, {Component} from 'react';

class Message extends Component {

  render() {
   return(
    // message template
    <div className="message">
      <span className="message-username"
            // props from app.jsx
            style={{color: this.props.userColor}}>
            {this.props.messageUser}</span>
      <span className="message-content">{this.props.messageContent}</span>
    </div>
   );
  }
}

export default Message;