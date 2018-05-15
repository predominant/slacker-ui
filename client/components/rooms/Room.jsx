import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

class Room extends Component {
    onClick(e) {
      e.preventDefault();
      const {setRoom, room} = this.props;
      setRoom(room);
    }
    render() {
      const {room, activeRoom} = this.props;
      let className = classnames({
        'room': true,
        'active': room === activeRoom,
        'has_unread': room.has_unread
      });
      return(
        <li className={className}>
          <a onClick={this.onClick.bind(this)}>
            # {room.name}
          </a>
        </li>
      )
    }
  }

  Room.propTypes = {
    room: PropTypes.object.isRequired,
    setRoom: PropTypes.func.isRequired,
    activeRoom: PropTypes.object.isRequired
  }

  export default Room;
