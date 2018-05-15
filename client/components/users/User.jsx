import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

class User extends Component {
  onClick(e) {
    e.preventDefault();
    const {user} = this.props;
    // setRoom(room);
  }
  render() {
    const {user} = this.props;
    let className = classnames({
      'user': true
      // 'active': room === activeRoom,
      // 'has_unread': room.has_unread
    });
    return(
      <li className={className}>
        <a onClick={this.onClick.bind(this)}>
          {user.name}
        </a>
      </li>
    )
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
}

export default User;
