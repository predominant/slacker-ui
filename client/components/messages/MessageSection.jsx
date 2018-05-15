import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RoomHeading from './RoomHeading.jsx';
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';

class MessageSection extends Component {
  render() {
    const {messages} = this.props;
    return (
      <div>
        <RoomHeading
          {...this.props}
        />
        <MessageList
          messages={messages}
        />
        <MessageForm
          {...this.props}
        />
      </div>
    );
  }
}

MessageSection.propTypes = {
  room: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  addMessage: PropTypes.func.isRequired
}

export default MessageSection;
