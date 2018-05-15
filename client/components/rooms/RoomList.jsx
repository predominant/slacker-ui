import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Room from './Room.jsx';

class RoomList extends Component {
  render() {
    const {rooms} = this.props;
    return (
      <ul className='room_list'>
        {rooms.map( room => {
            return (
              <Room
                room={room}
                key={room.id}
                {...this.props}
              />
            )
        })}
      </ul>
    )
  }
}

RoomList.propTypes = {
  rooms: PropTypes.array.isRequired,
  setRoom: PropTypes.func.isRequired,
  activeRoom: PropTypes.object.isRequired
}

export default RoomList;
