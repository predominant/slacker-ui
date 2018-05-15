import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import NotificationBar from '../notifications/NotificationBar.jsx';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onFocus(e) {
    this.setState({focus: true});
  }
  onBlur(e) {
    this.setState({focus: false});
  }
  onSubmit(e) {
    //e.preventDefault();
    const node = this.refs.message;
    let messageText = node.value;
    this.props.addMessage(messageText);
    node.value = '';
  }
  onKeyDown(e) {
    if (e.keyCode == 13 && !e.shiftKey)
    {
      e.preventDefault();
      this.onSubmit();
    }
  }
  render() {
    let className = classnames({
      message_input: true,
      focus: this.state.focus
    });
    const {room} = this.props;
    const placeholder = 'Message #' + room.name;
    return (
      <nav className='message_form'>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className={className}>
            <textarea
              placeholder={placeholder}
              onFocus={this.onFocus.bind(this)}
              onBlur={this.onBlur.bind(this)}
              onKeyDown={this.onKeyDown.bind(this)}
              type='text'
              ref='message' />
          </div>
        </form>
        <NotificationBar />
      </nav>
    );
  }
}

MessageForm.propTypes = {
  room: PropTypes.object.isRequired,
  addMessage: PropTypes.func.isRequired
}

export default MessageForm;
