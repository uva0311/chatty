import React, {Component} from 'react';

class Message extends Component {

  render() {

   const textOrImg = (this.props.messageContent).includes('img')? (
    <span className="message-content"
          dangerouslySetInnerHTML={{__html: this.props.messageContent }}>
    </span>
   ):(
    <span className="message-content">{this.props.messageContent}</span>
   );

   return(
    // message template
    <div className="message">
      <span className="message-username"
            // props from app.jsx
            style={{color: this.props.userColor}}>
            {this.props.messageUser}</span>
      { textOrImg }
    </div>
   );
  }
}

export default Message;