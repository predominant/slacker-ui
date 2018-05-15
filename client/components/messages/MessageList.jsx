import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Message from './Message.jsx';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.messagesEnd = {};
  }
  scrollToBottom() {
    this.messagesEnd.scrollIntoView({behavior: 'smooth'});
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  render() {
    const {messages} = this.props;
    return (
      <div className='message_list'>
        {messages.map( message => {
            return (
              <Message
                key={message.id}
                message={message}
              />
            )
        })}
        <div className='end_of_messages' ref={(el) => { this.messagesEnd = el }}></div>
      </div>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
}

export default MessageList;
