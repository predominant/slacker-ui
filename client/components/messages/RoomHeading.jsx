import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RoomTopic from '../rooms/RoomTopic.jsx';

class RoomHeading extends Component {
  render() {
    const {room} = this.props;
    return (
      <div className='room_heading'>
        <h4>{room.name}</h4>
        <RoomTopic {...this.props} />
      </div>
    );
  }
}

RoomHeading.propTypes = {
  room: PropTypes.object.isRequired,
  //setTopic: PropTypes.func.isRequired
}

export default RoomHeading;